import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchByText } from "../../redux/FilterOptions";
import search from "../../Style/Images/search.svg";
import { IonBackdrop, IonContent, IonPage } from "@ionic/react";

const SearchByText = () => {
  let dispatch = useDispatch();
  const FilterOptions = useSelector((state) => state.FilterOptions);
  return (
    <div
      className={`searchByText ${
        (FilterOptions.build || FilterOptions.area) != null ||
        FilterOptions.bedroom.length > 0 ||
        FilterOptions.showEligibleOnly.includes("Y") ||
        FilterOptions.groundFloor.includes("Y") ||
        FilterOptions.accesible.includes("Y") ||
        FilterOptions.sheltered.includes("Y") ||
        FilterOptions.parking.includes("Y") ||
        FilterOptions.garden.includes("Y")
          ? "searchByTextDisabled"
          : null
      }`}
    >
      <img className="search-icon" src={search} alt="search icon" />
      <input
        value={useSelector((state) => state.FilterOptions.searchByText)}
        type="text"
        placeholder="Search by advert number, address, or landlord"
        // aria-label="Search advert number, address, or landlord"
        onChange={(e) => dispatch(setSearchByText(e.target.value))}
      />
    </div>
  );
};

export default SearchByText;

// {
//   (FilterOptions.build || FilterOptions.area || FilterOptions.bedroom) !=
//     null ||
//   FilterOptions.showEligibleOnly.includes("Y") ||
//   FilterOptions.groundFloor.includes("Y") ||
//   FilterOptions.accesible.includes("Y") ||
//   FilterOptions.sheltered.includes("Y") ||
//   FilterOptions.parking.includes("Y") ||
//   FilterOptions.garden.includes("Y") ? (
//     <IonBackdrop tappable={true} visible={true} stopPropagation={true} />
//   ) : null;
// }
