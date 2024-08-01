import React from "react";

const BombPicker = () => {
  return (
    <div>
      <h4 className="text-white/70 text-sm mb-1 font-medium">Bombs</h4>
      <select className="select select-success w-full bg-mainbgColor focus:outline-green focus:outline-1 border-none">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};

export default BombPicker;
