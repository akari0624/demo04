module.exports = {
  get: () => {
    return Promise.resolve({
      result: "ok",
      ret: [
        { id: 1, username: "user1", enable: 1, locked: 0, created_at: "2019-08-13T17:54:31+00:00" },
        { id: 2, username: "user2", enable: 1, locked: 0, created_at: "2019-08-09T18:40:50+00:00" },
        { id: 3, username: "user3", enable: 0, locked: 0, created_at: "2019-08-10T09:47:22+00:00" },
      ],
      pagination: { first_result: "0", max_results: "20", total: 3 }
    });
  }
};