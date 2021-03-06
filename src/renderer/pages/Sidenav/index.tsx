import Account from "@/account";
import AccountConfiguration from "@/configurations/accounts/AccountConfiguration";
import Group from "@/groups/Group";
import IEntity from "@/utils/IEntity";
import { getRandomInt } from "@/utils/Random";
import CookieMain from "@renderer/CookieMain";
import { List } from "linqts";
import jssPreset from "material-ui";
import ListRender from "material-ui/List";
import withStyles, { StyleRulesCallback, WithStyles } from "material-ui/styles/withStyles";
import * as React from "react";
import AccountItem from "./AccountItem";
import GroupItem from "./GroupItem";

type style = "root";

const styles: StyleRulesCallback<style> = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

interface IState {
  connectedAccounts: List<Account>;
}

class Sidenav extends React.Component<WithStyles<style>, IState> {

  public state: IState = {
    connectedAccounts: CookieMain.connectedAccounts,
  };

  public componentDidMount() {
    CookieMain.EntitiesUpdated.on(this.entitiesUpdated);
  }

  public componentWillUnmount() {
    CookieMain.EntitiesUpdated.off(this.entitiesUpdated);
  }

  public render() {
    const { classes } = this.props;
    const { connectedAccounts } = this.state;

    return (
      <div className={classes.root}>
        <ListRender component="nav">
        {connectedAccounts.ToArray().map((a, idx) => {
          if (a.hasGroup) {
            return (
              <GroupItem key={idx} group={a.group} />
            );
          } else {
            return (
              <AccountItem key={idx} account={a} />
            );
          }
        })}
        </ListRender>
      </div>
    );
  }

  private entitiesUpdated = () => {
    this.setState({ connectedAccounts: CookieMain.connectedAccounts });
  }
}

export default withStyles(styles)<{}>(Sidenav);
