import { MenuIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Menu, MenuItem, MenuRoot } from "~/components/ui/menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-24">
      <Button variant="default">default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="outline">outline</Button>
      <Button variant="quiet">quiet</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">danger</Button>
      <Button variant="accent">accent</Button>
      <Button isLoading>Button</Button>

      <MenuRoot>
        <Button variant="outline" shape="square">
          <MenuIcon />
        </Button>
        <Menu>
          <MenuItem>Account settings</MenuItem>
          <MenuItem>Create team</MenuItem>
          <MenuItem>Command menu</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      </MenuRoot>
    </main>
  );
}
