export const obj1 = {
    name: "gg",
    age: 21,
    friends: ["1", "2", "3"],
    test: {
        address: "cxd"
    },
    say: function () {
        console.log("say~~~~");
    }
};

export const obj2 = {
    name: "gg",
    friends: ["1", "2", "3"],
    age: 21,
    [Symbol("666")]: 123
};
