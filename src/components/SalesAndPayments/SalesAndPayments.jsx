import "./SalesAndPayments.css";
import sales from "../Assets/sales.png";
import customer from "../Assets/customer.png";

const SalesAndPayments = () => {
  // const [number, setNumber] = useState(4331);

  // useEffect(() => {
  //   let timer;
  //   if (number < 5000) {
  //     timer = setInterval(() => {
  //       setNumber((prevNumber) => Math.min(prevNumber + 1, 5000));
  //     }, 200);
  //   }
  //   return () => clearInterval(timer);
  // }, [number]);

  return (
    <div className="sales-and-payments-container">
      <div className="sales-and-payments-container__img"></div>
      <div className="sales-and-payments__sales">
        <p>+5000 SALES</p>
        <p>+4000 CUSTOMERS</p>
      </div>
      <div className="sales-and-payments__payments">
        <img src={sales} alt="" />
        <img src={customer} alt="" />
      </div>
    </div>
  );
};

export default SalesAndPayments;
