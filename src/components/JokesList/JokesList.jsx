import React from "react";
import JokeCard from "components/JokeCard";
import { connect } from "react-redux";
import { Loader, ErrorMessage } from "ui";
import { uiComponents } from "redux/reducers/uiStateReducer";

const JokesList = (props) => {
  const { jokes, error, isLoading } = props;

  const showJokeList = () => {
    const jokeElementList = jokes.map((jokeData) => {
      return <JokeCard key={jokeData.id} styleClassPrefix="filtered" data={jokeData} />;
    });
    return (
      <>
        {isLoading && <Loader />}
        {<ErrorMessage error={error} />}
        {!(isLoading || error) && jokeElementList}
      </>
    );
  };

  return <section className="filtered">{showJokeList()}</section>;
};

const mapStateToProps = (state) => ({
  jokes: state.jokes.list,
  isLoading: state.uiState.loading[uiComponents.JOKES_LIST_COMPONENT],
  error: state.uiState.error[uiComponents.JOKES_LIST_COMPONENT],
});

export default connect(mapStateToProps, {})(JokesList);
