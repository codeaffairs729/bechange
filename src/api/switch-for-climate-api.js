/* eslint-disable import/no-anonymous-default-export */
import _each from 'lodash/each';
import _merge from 'lodash/merge';

const baseUrl = 'https://api.switch-for-climate.de';
const apiKey = 'eWFpQNpi97xctpmq82uR3bc_jaP0ai2m';

const federalStates = {
  SchleswigHolstein: { name: 'Schleswig-Holstein', short: 'SH' },
  Hamburg: { name: 'Hamburg', short: 'HH' },
  Niedersachsen: { name: 'Niedersachsen', short: 'NI' },
  Bremen: { name: 'Bremen', short: 'HB' },
  NordrheinWestfalen: { name: 'Nordrhein-Westfalen', short: 'NW' },
  Hessen: { name: 'Hessen', short: 'HE' },
  RheinlandPfalz: { name: 'Rheinland-Pfalz', short: 'RP' },
  BadenWuerttemberg: { name: 'Baden-Württemberg', short: 'BW' },
  Bayern: { name: 'Bayern', short: 'BY' },
  Saarland: { name: 'Saarland', short: 'SL' },
  Berlin: { name: 'Berlin', short: 'BE' },
  Brandenburg: { name: 'Brandenburg', short: 'BB' },
  MecklenburgVorpommern: { name: 'Mecklenburg-Vorpommern', short: 'MV' },
  Sachsen: { name: 'Sachsen', short: 'SN' },
  SachsenAnhalt: { name: 'Sachsen-Anhalt', short: 'ST' },
  Thueringen: { name: 'Thüringen', short: 'TH' },
};

function formatQueryParameters(params) {
  let list = [];
  _each(params, (value, key) => {
    if (value) {
      list.push(`${key}:"${value}"`);
    }
  });

  return list.join(', ');
}

function fetchWrapper(body, options) {
  const controller = new AbortController();
  const requestTimeout = setTimeout(() => controller.abort(), 10000);

  return fetch(
    baseUrl,
    _merge(
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': '',
          Authorization: apiKey,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      },
      options
    )
  )
    .then(response => {
      clearTimeout(requestTimeout);

      if (!response.ok) {
        throw new Error('fetch failed: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      clearTimeout(requestTimeout);

      if (data.errors && data.errors.length) {
        throw new Error(data.errors[0].message);
      }

      return data.data;
    });
}

function formatRobinWoodRating(ratingSrc) {
  let rating = { ...ratingSrc };

  rating.text = rating.text ? rating.text.replace(/#/g, '\n') : '';
  rating.reason = rating.reason ? rating.reason.replace(/#/g, '\n') : '';

  return rating;
}

export default {
  energySources: {
    power: {
      name: 'power',
      label: 'Strom',
      consumptionLevels: [
        { kwh: 1600 },
        { kwh: 2600 },
        { kwh: 3300 },
        { kwh: 3900 },
        { kwh: 4900 },
      ],
    },
    gas: {
      name: 'gas',
      label: 'Gas',
      consumptionLevels: [
        { kwh: 7000, size: 45 },
        { kwh: 14000, size: 90 },
        { kwh: 19000, size: 120 },
        { kwh: 25000, size: 160 },
      ],
    },
  },

  validateIBAN(iban) {
    return fetchWrapper({
      query: `{ 
                validateIBAN(iban: "${iban}") { 
                    valid 
                    iban
                    bic
                    bankName
                }
            }`,
    }).then(({ validateIBAN }) => validateIBAN);
  },

  fetchProviders({ id, energy = 'power', name }) {
    return fetchWrapper({
      query:
        `{ 
                providers(` +
        formatQueryParameters({ id, energy, name }) +
        `) { 
                    id
                    energy
                    name
                }
            }`,
    }).then(({ providers }) => {
      return providers;
    });
  },

  fetchLocations(zipCode, city) {
    return fetchWrapper({
      query:
        `{ 
                locations(zipCode: "${zipCode}"` +
        (city ? `, city:"${city}"` : '') +
        `) { 
                    zipCode 
                    city
                    state
                    operators
                }
            }`,
    }).then(({ locations }) => {
      locations.forEach(location => {
        location.operatorIds = Object.keys(location.operators);
      });

      return locations;
    });
  },

  fetchRobinWoodProviders(name) {
    return fetchWrapper({
      query: `{ 
                robinWoodProviders(name: "${name}") { 
                    companyName
                }
            }`,
    }).then(({ robinWoodProviders }) => {
      return robinWoodProviders;
    });
  },

  fetchRobinWoodRating(name, includeProvider = false) {
    return fetchWrapper({
      query: `{ 
                robinWoodRating(companyName: "${name}") { 
                    companyName
                    criteriaId
                    reason
                    note
                    teaser
                    text
                    link
                    recommendation
                    ${
                      includeProvider ? 'provider { id rates { id name } }' : ''
                    }
                }
            }`,
    }).then(({ robinWoodRating }) => {
      return formatRobinWoodRating(robinWoodRating);
    });
  },

  fetchSwitchRates({ energy, consumption, zipCode, city, operatorId }) {
    return fetchWrapper({
      query: `{
                switchRates(energy: ${energy}, consumption: ${consumption}, zipCode: "${zipCode}", city: "${city}", operatorId: "${operatorId}") { 
                    id
                    name
                    slug
                    foreignId
                    ranking
                    description
                    energyDescription
                    price {
                        basePrice
                        workingPrice
                    }
                    emissions {
                        type
                        value
                    }
                    labels {
                        slug
                        name
                        description
                        authority
                        authorityLink
                        labelOnlineLink
                        image {
                            url
                            width
                            height
                        }
                        thumbnail {
                            url
                            width
                            height
                        }
                    }
                    advantages
                    minimumTerm {
                        unit
                        value
                    }
                    extendedTerm {
                        unit
                        value
                    }
                    cancellationPeriod {
                        unit
                        value
                    }
                    priceGuarantee {
                        date
                        period {
                            unit
                            value
                        }
                    }
                    energyMix {
                        source
                        percent
                    }
                    energyMixYear
                    provider {
                        id
                        name
                        slug
                        tagline
                        legalName
                        about
                        website
                        logo {
                            url
                            width
                            height
                        }
                        robinWoodRating {
                            companyName
                            criteriaId
                            reason
                            note
                            teaser
                            text
                            link
                            recommendation
                        }
                        robinWoodRecommendation {
                            contribution
                            energySources
                            entanglements
                            company
                        }
                        utopiaTestLink
                        robinWoodProviderLink
                        yearFounded
                        shareholders
                        employeeCount
                        customerCount
                        bankAccountsAt
                        address
                        federalState
                        customerServiceEmail
                        customerServicePhone
                        connection
                        connectionDetails
                        legalInfo {
                            termsLink
                            cancellationLink
                            privacyLink
                            debitInfo
                        }
                    }
                    rating {
                        contributionByConsumption
                        contributionPerCustomerAndYear
                        additionalContribution
                        supportsSmallProducers
                        labelOkPower
                        labelGruenerStrom
                        labelTuevNord
                        transparentSources
                        buildsPowerStations
                    }
                    affiliateLink
                }
            }`,
    }).then(data => {
      if (data.switchRates) {
        data.switchRates.forEach(rate => {
          let state = federalStates[rate.provider.federalState];

          if (state) {
            rate.provider.federalState = state.name;
          }

          rate.provider.robinWoodRating = formatRobinWoodRating(
            rate.provider.robinWoodRating
          );
        });
      }

      return data;
    });
  },

  fetchLocalRates({ energy, zipCode }) {
    return fetchWrapper({
      query: `{ 
                localRates(energy: ${energy}, zipCode: "${zipCode}") { 
                    basicSupply {
                        rateId
                        providerId
                    
                        rate {
                            id
                            slug
                            name
                            zipCode
                            provider {
                                name
                                robinWoodRating {
                                    companyName
                                    criteriaId
                                    reason
                                    note
                                    teaser
                                    text
                                    link
                                    recommendation
                                }
                            }
                            energyMix {
                                source
                                percent
                            }
                            zipCode
                            emissions {
                                type
                                value
                            }
                            minimumTerm {
                                unit
                                value
                            }
                            extendedTerm {
                                unit
                                value
                            }
                            cancellationPeriod {
                                unit
                                value
                            }
                            priceGuarantee {
                                date
                                period {
                                    unit
                                    value
                                }
                            }
                    
                            price {
                                basePrice
                                workingPrice
                            }
                        }
                    }
                    
                    rates {
                        id
                        name
                        providerId
                    }
                
                    providers {
                        id
                        name
                    }
                }
            }`,
    }).then(data => {
      if (
        data.localRates &&
        data.localRates.basicSupply &&
        data.localRates.basicSupply.rate
      ) {
        let rate = data.localRates.basicSupply.rate;

        rate.provider.robinWoodRating = formatRobinWoodRating(
          rate.provider.robinWoodRating
        );
      }

      return data;
    });
  },

  fetchLocalRate({ energy, zipCode, id }) {
    return fetchWrapper({
      query: `{ 
                localRate(energy: ${energy}, zipCode: "${zipCode}", id: "${id}") { 
                    id
                    slug
                    name
                    zipCode
                    provider {
                        name
                        robinWoodRating {
                            companyName
                            criteriaId
                            reason
                            note
                            teaser
                            text
                            link
                            recommendation
                        }
                    }
                    energyMix {
                        source
                        percent
                    }
                    zipCode
                    emissions {
                        type
                        value
                    }
                    minimumTerm {
                        unit
                        value
                    }
                    extendedTerm {
                        unit
                        value
                    }
                    cancellationPeriod {
                        unit
                        value
                    }
                    priceGuarantee {
                        date
                        period {
                            unit
                            value
                        }
                    }
            
                    price {
                        basePrice
                        workingPrice
                    }
                }
            }`,
    }).then(data => {
      if (data.localRate) {
        let rate = data.localRate;

        rate.provider.robinWoodRating = formatRobinWoodRating(
          rate.provider.robinWoodRating
        );
      }

      return data;
    });
  },
};
