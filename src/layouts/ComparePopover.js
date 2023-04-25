import { MenuItem, MenuList, Popover } from '@mui/material';

export default function ComparePopover({ anchorEl, onClose, open, navigate }) {
  const menuItems = [
    {
      id: 0,
      title: 'Energy',
      link: '/energy',
    },
    {
      id: 1,
      title: 'Banking',
      link: '/banking',
    },
    {
      id: 2,
      title: 'Telecom',
      link: '/telecom',
    },
    {
      id: 3,
      title: 'Insurance',
      link: '/insurance',
    },
  ];
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '150px' },
      }}
    >
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
            },
            padding: '12px 16px',
          },
        }}
      >
        {menuItems.map(item => (
          <MenuItem key={item.id} onClick={() => navigate(item.link)}>
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Popover>
  );
}
