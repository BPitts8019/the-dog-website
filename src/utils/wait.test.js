import wait from "./wait";

jest.useFakeTimers();

test("Wait for promise to resolve using async/await.", async () => {
   const spy = jest.fn();
   const result = await wait(3, spy);
   
   jest.runAllTimers();
   
   expect(result).toBe("hurray");
   expect(spy).toHaveBeenCalledWith("hurray");
   expect(spy).toHaveBeenCalledTimes(1);
});

// test("Wait for promise to resolve with `done` function.", (done) => {
//    wait(3).then(result => {
//       expect(result).toBe("hurray");
//       done();
//    }).catch(error => {
//       done(error);
//    });
// });

// test("Wait for promise to resolve by returning a promise.", (done) => {
//    return wait(3).then(result => {
//       expect(result).toBe("hurray");
//       done();
//    });
// });



