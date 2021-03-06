import LanguageManager from "@/configurations/language/LanguageManager";
import Account from "@account";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
import withStyles, { StyleRulesCallback, WithStyles } from "material-ui/styles/withStyles";
import Tabs, { Tab } from "material-ui/Tabs";
import * as React from "react";
import Jobs from "./Jobs";
import Spells from "./Spells";
import Stats from "./Stats";

type style = "root" | "appBar" | "tab";

const styles: StyleRulesCallback<style> = (theme) => ({
  appBar: {
    height: 30,
  },
  root: {
    flexGrow: 1,
  },
  tab: {
    height: 30,
    maxWidth: 1000,
  },
});

interface IProps {
  account: Account;
}

interface IState {
  value: number;
}

type Props = IProps & WithStyles<style>;

class Character extends React.Component<Props, IState> {

  public state: IState = {
    value: 0,
  };

  public render() {
    const { account, classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
          >
            <Tab className={classes.tab} label={LanguageManager.trans("stats")} />
            <Tab className={classes.tab} label={LanguageManager.trans("spells")} />
            <Tab className={classes.tab} label={LanguageManager.trans("jobs")} />
          </Tabs>
        </AppBar>

        <div style={{ display: value !== 0 ? "none" : "" }}>
          <Stats account={account} />
        </div>
        <div style={{ display: value !== 1 ? "none" : "" }}>
          <Spells account={account} />
        </div>
        <div style={{ display: value !== 2 ? "none" : "" }}>
          <Jobs account={account} />
        </div>

        {/* {value === 0 && <Stats account={account} />}
        {value === 1 && <Spells account={account} />}
        {value === 2 && <Jobs account={account} />} */}
      </Paper>
    );
  }

  private handleChange = (event, value) => {
    this.setState({ value });
  }
}

export default withStyles(styles)<IProps>(Character);
