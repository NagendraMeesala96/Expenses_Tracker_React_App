import { Fragment } from "react";

function ExpensiveItemCard(props) {
  let items = props.expensiveItems;
  return (
    <Fragment>
      <div className="container">
        {items.length > 0  ? items.map((item) => {
          return (
            <div key={item.id}>
              <div className="row card-body">
                <div className="col-md-2 ">
                  <div className="date">
                    <div className="content">
                      <h5>{item.date.toLocaleString('en-US',{month:'long'})}</h5>
                      <h6>{item.date.toLocaleString('en-US',{day:'2-digit'})}</h6>
                      <h4>{item.date.getFullYear()}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 mt-5">
                  <h3>{item.title}</h3>
                </div>
                <div className="col-md-2">
                  <div className="price-item">
                    <div className="Item-price-border">
                      <h4>${item.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          );
        }) : <h3 className="text-center">No Expenses</h3>}
      </div>
    </Fragment>
  );
}

export default ExpensiveItemCard;
