import React, { useState } from "react";

function EvaluationList() {
  const initNotes = [
    {
      id: 1,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 2,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 3,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 4,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 5,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 6,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 7,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 8,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 9,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 10,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 11,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
    {
      id: 12,
      fields: [
        { name: "num1", value: 0, isEdit: false },
        { name: "num2", value: 0, isEdit: false },
        { name: "num3", value: 0, isEdit: false },
        { name: "num4", value: 0, isEdit: false },
        { name: "num5", value: 0, isEdit: false },
        { name: "num6", value: 0, isEdit: false },
        { name: "num7", value: 0, isEdit: false },
        { name: "num8", value: 0, isEdit: false },
      ],
    },
  ];
  const [notes, setNotes] = useState(initNotes);
  const [total, setTotal] = useState(0);

  const fieldSum = (fields, id) => {
    if (fields.id === id) {
      let sum = fields.reduce((acc, item) => {
        return acc + item.value;
      }, 0);
      setTotal(sum);
    }
  };

  const rows = notes.map((note) => {
    const cells = note.fields.map((field) => {
      let elem;

      if (!field.isEdit) {
        elem = (
          <input
            value={field.value}
            onChange={(event) => changeCell(note.id, field.name, event)}
            className="w-[40px]"
            type="number"
            max={30}
            placeholder="0"
          />
        );
      }

      return (
        <td className="w-[2.5rem]" key={field.name}>
          {elem}
        </td>
      );
    });

    return (
      <tr className="grid grid-cols-9 gap-x-[80px] mb-[3px]" key={note.id}>
        {cells}
        <td>{total}</td>
      </tr>
    );
  });

  function changeCell(id, name, event) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const fields = note.fields.map((field) => {
            if (field.name === name) {
              return { ...field, value: +event.target.value };
            } else {
              return field;
            }
          });
          fieldSum(fields);

          return { id, fields };
        } else {
          return note;
        }
      })
    );
  }

  return (
    <>
      <div className="w-[56.25rem] mx-auto">
        <h1 className="text-center mb-4">
          Оценочный лист практического задания №1
        </h1>
        <div className="flex w-[43.75rem] mx-auto justify-between mb-4">
          <div>
            <h3>Выполняемая работа:</h3>
            <h3>Член экзаменационной комиссии:</h3>
          </div>
          <div>
            <h3>Разработать часть интернет приложения</h3>
            <h3>Зейналов Теймур Шавкетович</h3>
          </div>
        </div>
        <div className="flex justify-center gap-[0.625rem]">
          <div className="flex flex-col items-center">
            <h3 className="num_title mb-[0.5625rem]">
              Идентификационный № участника
            </h3>
            <div className="flex gap-[0.3125rem] flex-col content-center ">
              <div className="font-medium">1</div>
              <div className="font-medium">2</div>
              <div className="font-medium">3</div>
              <div className="font-medium">4</div>
              <div className="font-medium">5</div>
              <div className="font-medium">6</div>
              <div className="font-medium">7</div>
              <div className="font-medium">8</div>
              <div className="font-medium">9</div>
              <div className="font-medium">10</div>
              <div className="font-medium">11</div>
              <div className="font-medium">12</div>
            </div>
          </div>
          <div className="w-[56.25rem]">
            <div className="flex h-[13.75rem] justify-between w-[100%]">
              <div className="font-medium num_title">
                Соблюдение правил ТБ и охраны труда
              </div>
              <div className="font-medium num_title">
                Подготовка рабочего места к работе
              </div>
              <div className="font-medium num_title">
                Умение описать структуру Веб страницы
              </div>
              <div className="font-medium num_title">
                Умение комплектовать элементы Веб страницы
              </div>
              <div className="font-medium num_title">
                Умение адаптировать Веб страницу под различные электронные
                устройства
              </div>
              <div className="font-medium num_title">
                Умение использовать контроль версии
              </div>
              <div className="font-medium num_title">
                Умения использовать инструмент создания пользовательского
                интерфейса ReactJS
              </div>
              <div className="font-medium num_title">
                Соответствие выполненной работы требованиям к качеству
              </div>
              <div className="font-medium num_title">Общая сумма баллов</div>
            </div>
            <h3 className="text-center ">Максимальное количество баллов</h3>
            <div className="flex items-center justify-between w-[100%]">
              <div className="font-medium">5</div>
              <div className="font-medium">5</div>
              <div className="font-medium">10</div>
              <div className="font-medium">15</div>
              <div className="font-medium">15</div>
              <div className="font-medium">10</div>
              <div className="font-medium">10</div>
              <div className="font-medium">30</div>
              <div className="font-medium">100</div>
            </div>
            <table className="w-[100%]">
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EvaluationList;
