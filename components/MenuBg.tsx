interface menuBgProps {
  openMenu: boolean;
}

export default function MenuBg({ openMenu }: menuBgProps) {
  return (
    <div
      className={`fixed inset-0 bg-linear-to-b from-black/0 to-black backdrop-blur-sm transition-transform duration-300 ${openMenu ? `translate-y-0` : `-translate-y-175`} z-0 sm:hidden`}
    ></div>
  );
};
