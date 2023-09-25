import ItemCards from "./common/ItemCards";
import Navbar from "./common/Navbar";
import Services from "./components/Services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getServicesAction } from "./redux/services/slice";

function App() {
  const { data, isLoading } = useSelector((state) => state.services.services);

  const dispatch = useDispatch();

  const isOdd = (num) => {
    return num % 2 === 0 ? "true" : "false";
  };

  useEffect(() => {
    dispatch(getServicesAction());
  }, [dispatch]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Services />
      {data?.map((e, i) => {
        console.log(i);
        return (
          <ItemCards
            title={e.title}
            photo={e.photo}
            icon={e.icon}
            description1={e.description1}
            description2={e.description2}
            imageOnLeft={isOdd(i)}
          />
        );
      })}
    </div>
  );
}

export default App;
