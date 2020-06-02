import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router";

import Dogs, { DogsProps } from "../components/Dogs";
import { DogCeoState } from "../reducer";
import { fetchDogs } from "../actions/dogCeo";

interface StateProps {
  images: string[];
  isLoadking?: boolean;
}

interface DispatchProps {
  fetchDogsStart: (type: string) => void;
}

type EnhancedDogsProps = DogsProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ type: string }>;

const mapStateToProps = (state: DogCeoState): DogsProps => ({
  images: state.images,
  type: state.type,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      fetchDogsStart: (type: string) => fetchDogs.start(type),
    },
    dispatch
  );

const MembersContainer: FC<EnhancedDogsProps> = ({
  images,
  isLoading,
  fetchDogsStart,
  match,
}) => {
  const { type } = match.params;

  useEffect(() => {
    fetchDogsStart(type);
  }, []);

  return <Dogs images={images} type={type} isLoading={isLoading} />;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MembersContainer)
);
