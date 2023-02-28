import React from "react";

function FilterRole() {
  const roles = [
    {
      id: 1,
      userRole: "Goalkeeper",
    },
    {
      id: 2,
      userRole: "Defence",
    },
    {
      id: 3,
      userRole: "Midfielder",
    },
    {
      id: 4,
      userRole: "Forward",
    },
  ];
  return (
    <div className="flex gap-4 w-full justify-center items-center mt-2">
      {roles.map((role) => {
        return <button className="btn text-white">{role.userRole}</button>;
      })}
    </div>
  );
}

export default FilterRole;
