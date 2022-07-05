let date = () => {
  let date = new Date();
  console.log(new Date().getTime());
  let years = date.getFullYear();
  let month = date.getUTCMonth() < 10 ? +('0' + date.getUTCMonth()) + 1 : +date.getUTCMonth() + 1;
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let mins =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let sec =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return `${years}-${month}-${day} ${hours}:${mins}:${sec}`;
};

module.exports = date;
