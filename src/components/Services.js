import { useDispatch, useSelector } from "react-redux";
import { getServicesAction } from "../redux/services/slice";
import { useEffect } from "react";

const Services = () => {
  const { data, isLoading } = useSelector((state) => state.services.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesAction());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <span>Loadinggg...</span>
      ) : data ? (
        <div>
          <h1>Data xa</h1>
        </div>
      ) : (
        <span>Data xaina</span>
      )}
    </div>
  );
};

export default Services;
