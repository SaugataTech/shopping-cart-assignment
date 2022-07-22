const CategoryList = ({categoryList}) => {

  return (
    <div className="category-container">
      {
        categoryList.length && categoryList.filter(item => item.enabled).map(category => {
          return(
            <div>
              <hr/>
              {
                category.order % 2 ?
                (
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="d-block w-100"
                        src={ category.imageUrl }
                        alt={ category.name }
                      />
                    </div>
                    <div className="col-md-8 category-details-container">
                      <h3 className="col-md-12">{category.name}</h3>
                      <p className="col-md-12">{category.description}</p>
                      <div className="col-md-12">
                        <button>{'Explore '+category.key}</button>
                      </div>
                    </div>
                  </div>
                ) :
                (
                  <div className="row">
                    <div className="col-md-8 category-details-container">
                      <h3 className="col-md-12">{category.name}</h3>
                      <p className="col-md-12">{category.description}</p>
                      <div className="col-md-12">
                        <button>{'Explore '+category.key}</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="d-block w-100"
                        src={ category.imageUrl }
                        alt={ category.name }
                      />
                    </div>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default CategoryList;
