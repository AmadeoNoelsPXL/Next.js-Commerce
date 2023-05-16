import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className={`mb-10`}>More</Menu.Button>
      <Menu.Items className={`flex flex-col navBar w-56`}>
        <Menu.Item>
          <div className="p-4">
            <Link href={`/myAccount`}>Account Settings</Link>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="p-4">
            <Link href={`/`}>Producten</Link>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
