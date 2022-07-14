import { useEffect } from "react";
import Maps from "../../components/Maps/Maps";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadLocationsThunk } from "../../redux/thunks/locationsThunks";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userInfo.id);

  useEffect(() => {
    dispatch(loadLocationsThunk(userId));
  }, [dispatch, userId]);

  return <Maps />;
};

export default HomePage;
