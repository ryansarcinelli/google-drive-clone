import React from "react";

interface HeaderProps {
  userId: string;
  accountId: string;
}

const Header = ({ userId, accountId }: HeaderProps) => {
  return (
    <header className="header">
      {/* Header content */}
    </header>
  );
};

export default Header;
