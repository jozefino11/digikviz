import ButtonComponent from "./ButtonComponent";

const FormComponent = ({ data, reRender }) => {
  return (
    <div>
      <div>
        <h2>{data.question}</h2>
      </div>
      <div className="kvizButtons" style={{ display: "flex" }}>
        {data.answers.map((answer, index) => {
          return (
            <div key={index}>
              <ButtonComponent
                id={data._id}
                answer={answer}
                touched={data.touched}
                idx={data.id}
                reRender={reRender}
                taskList={data.taskList}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormComponent;
