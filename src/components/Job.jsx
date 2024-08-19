import City from "./City";
import Country from "./Country";
import ContractType from "./ContractType";
import Title from "./Title";

const Job = (props) => {
  console.log(props);
  return (
    <div className="item {props.className}">
      <Title title={props.title} />
      <div className="item-bottom">
        <ContractType contractType={props.contractType} />
        <Country country={props.country} />
        <City city={props.city} />
      </div>
    </div>
  );
};

export default Job;
