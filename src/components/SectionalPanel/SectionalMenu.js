import React from 'react';
import classes from './SectionalPanel.scss';
import { Glyphicon } from 'react-bootstrap';
import * as constants from './../../constants';

class SectionalMenu extends React.Component {
  static propTypes = {
    chooseStep: React.PropTypes.func.isRequired,
    goToSection: React.PropTypes.func.isRequired,
    section: React.PropTypes.string.isRequired
  };
  search = () => {
    if (constants.PLATFORM_SECTION_SEARCH_DATASETS !== this.props.section) {
      this.props.goToSection(constants.PLATFORM_SECTION_SEARCH_DATASETS);
    } else {
      this.props.goToSection('');
    }
  };
  experience = () => {
    if (constants.PLATFORM_SECTION_EXPERIENCE_MANAGEMENT !== this.props.section) {
      this.props.goToSection(constants.PLATFORM_SECTION_EXPERIENCE_MANAGEMENT);
    } else {
      this.props.goToSection('');
    }
  };
  monitor = () => {
    if (constants.PLATFORM_SECTION_MONITOR !== this.props.section) {
      this.props.goToSection(constants.PLATFORM_SECTION_MONITOR);
    } else {
      this.props.goToSection('');
    }
  };
  workflows = () => {
    if (constants.PLATFORM_SECTION_WORKFLOWS !== this.props.section) {
      this.props.goToSection(constants.PLATFORM_SECTION_WORKFLOWS);
    } else {
      this.props.goToSection('');
    }
    this.props.chooseStep(constants.WORKFLOW_STEP_PROCESS);
  };
  account = () => {
    if (constants.PLATFORM_SECTION_ACCOUNT_MANAGEMENT !== this.props.section) {
      this.props.goToSection(constants.PLATFORM_SECTION_ACCOUNT_MANAGEMENT);
    } else {
      this.props.goToSection('');
    }
  };
  render () {
    return (
      <div className={classes['SectionalMenu']}>
        <nav>
          <a onClick={this.search} title="Search Datasets"
            className={(this.props.section === constants.PLATFORM_SECTION_SEARCH_DATASETS) ? classes['active'] : ''}>
            <Glyphicon glyph="music" />
          </a>
          <a onClick={this.experience} title="Experience Management"
            className={(this.props.section === constants.PLATFORM_SECTION_EXPERIENCE_MANAGEMENT) ? classes['active'] : ''}>
            <Glyphicon glyph="book" />
          </a>
          <a onClick={this.workflows} title="Workflow Wizard"
            className={(this.props.section === constants.PLATFORM_SECTION_WORKFLOWS) ? classes['active'] : ''}>
            <Glyphicon glyph="th-list" />
          </a>
          <a onClick={this.monitor} title="Workboard"
            className={(this.props.section === constants.PLATFORM_SECTION_MONITOR) ? classes['active'] : ''}>
            <Glyphicon glyph="tasks" />
          </a>
          <a onClick={this.account}
            title="Account Management"
            className={(this.props.section === constants.PLATFORM_SECTION_ACCOUNT_MANAGEMENT) ? classes['active'] : ''}>
            <Glyphicon glyph="user" />
          </a>
        </nav>
      </div>
    );
  }
}
export default SectionalMenu;
