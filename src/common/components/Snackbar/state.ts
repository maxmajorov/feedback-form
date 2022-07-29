let rerender = () => {
  console.log("status changed");
};

type initialType = {
  status: string;
  getStatus: () => string;
  setStatus: (status: string) => void;
  subscribe: (observer: any) => void;
};

export const sendMessState: initialType = {
  // status: null as null | string,
  status: "",

  getStatus() {
    return this.status;
  },

  setStatus(status: string) {
    this.status = status;
    rerender();
  },

  subscribe(observer: any) {
    rerender = observer;
  },
};

// export const subscribe = (observer: any) => {
//   rerender = observer;
// };

console.log(sendMessState.status);
