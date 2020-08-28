import { combineReducers } from "redux";
import { useReducer } from "react";

const apiList = [
  { name: "junior mateus", money: "100000" },
  { name: "josefa", money: "120000" },
  { name: "aclide onion", money: "200000" },
  { name: "benji", money: "10090" },
  { name: "diana", money: "1040000" },
  { name: "mariana", money: "1055000" },
  { name: "desire", money: "50000" }
];
//let idx = 0;

const addingUsers = (newlist = [], action) => {
  if (action.type === "Add_User") {
    const templist = apiList.shift();
    newlist = [...newlist, templist];
    return newlist;
  }

  if (action.type === "Double") {
    const copylist = [...newlist];
    copylist.map((item) => {
      const doublemoney = parseInt(item.money * 2);
      item.money = doublemoney;
    });
    newlist = copylist;
    return newlist;
  }

  if (action.type === "OnlyMillionaire") {
    const copylist = [...newlist];
    const data = copylist.filter((user) => user.money > 100000);
    newlist = data;
    console.log(newlist);
    return newlist;
  }

  if (action.type === "totalWealth") {
    const copylist = [...newlist];
    const reducer = (accumulator, item) => {
      return accumulator + parseInt(item.money);
    };

    const total = copylist.reduce(reducer, 0);

    console.log(total);
    return [{ name: "TOTAL", money: total }];
  }

  if (action.type === "sort") {
    const copylist = [...newlist];
    //  data.sort((a, b) => b.money - a.money);
    // var points = [40, 100, 1, 5, 25, 10];
    // points.sort(function(a, b){return a-b});
    newlist = copylist.sort((a, b) => b.money - a.money);
    //console.log(newlist);
    return newlist;
  }

  return newlist;
};

export default combineReducers({
  addingUsers: addingUsers
});
