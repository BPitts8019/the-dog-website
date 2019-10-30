import wait from "./wait";

test("Wait for promise to resolve with `done` function.", (done) => {
   wait(3).then(result => {
      expect(result).toBe("hurray");
      done();
   }).catch(error => {
      done(error);
   });
});

test("Wait for promise to resolve by returning a promise.", (done) => {
   return wait(3).then(result => {
      expect(result).toBe("hurray");
      done();
   });
});

test("Wait for promise to resolve using async/await.", async () => {
   const result = await wait(3);
   expect(result).toBe("hurray");
});

