import React from "react";

function InputData() {
  function createData(name, text, id) {
    return { name, text, id };
  }

  const rows = [
    createData("Профессия:", "Web - программист", 1),
    createData("Место проведения:", "г.Бишкек,  пр.Чуй 225, Профессиональный лицей №98", 2),
    createData("Дата проведеня:", "25 июня 2021 г.", 3),
    createData("Председатель ЭК :", "Зейналов Теймур Шавкетович", 4),
    createData("Член ЭК:", "Вопольский Виктор Владимирович" , 5),
    createData("Член ЭК:", '', 6),
    createData("Наименование работы 1:", "Разработать часть интернет приложения", 7),
    createData("Наименование работы 2:", '', 8),
    createData("Наименование работы 3:", '', 9),
    createData("Наименование работы 4:", '', 10),
  ];

  return (
    <>
      <table className="border-collapse border border-slate-500 w-[58.125rem] mx-auto">
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border border-slate-700 p-[0.625rem]">{row.name}</td>
              <td className="border border-slate-700 p-[0.625rem]">{row.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default InputData;
