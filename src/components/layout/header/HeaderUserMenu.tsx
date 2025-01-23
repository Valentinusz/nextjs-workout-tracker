import {
    Avatar,
    Menu, MenuDivider,
    MenuDropdown, MenuItem,
    MenuTarget, Text,
    UnstyledButton,
} from "@mantine/core";
import {IconChevronRight, IconLogout, IconUser} from "@tabler/icons-react";

export interface HeaderUserMenuProps {}

export function HeaderUserMenu() {
  return (
    <Menu>
      <MenuTarget>
        <UnstyledButton className="flex items-center gap-xs">
          <Avatar />
            <div>
                <Text>Username</Text>
                <Text c="dimmed">Admin</Text>
            </div>
            <IconChevronRight />
        </UnstyledButton>
      </MenuTarget>
      <MenuDropdown>
          <MenuItem leftSection={<IconUser/>}>
              Profile
          </MenuItem>
        <MenuDivider/>
        <MenuItem leftSection={<IconLogout/>} c="red">
            Log out
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
}
