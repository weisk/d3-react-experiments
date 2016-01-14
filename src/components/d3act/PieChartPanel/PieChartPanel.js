import React from 'react';

import ViewSourceOnGithub from '../../ViewSourceOnGithub/ViewSourceOnGithub';
import Chart from 'd3act';

import {
  d3actPieExtractDesktopOperatingSystemByYear,
  d3actBarExtractDesktopOperatingSystemByYear
} from '../../../resources/helper';

const pieChartDesktopOperatingSystemByYear = {
  2015: d3actPieExtractDesktopOperatingSystemByYear(2015),
  2014: d3actPieExtractDesktopOperatingSystemByYear(2014),
  2013: d3actPieExtractDesktopOperatingSystemByYear(2013)
};
const barChartDesktopOperatingSystemByYear = {
  2015: d3actBarExtractDesktopOperatingSystemByYear(2015),
  2014: d3actBarExtractDesktopOperatingSystemByYear(2014),
  2013: d3actBarExtractDesktopOperatingSystemByYear(2013)
};

export default class d3actPieChartPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: '2015',
      pieData: pieChartDesktopOperatingSystemByYear['2015'],
      barData: barChartDesktopOperatingSystemByYear['2015'],
      size: (window && window.innerWidth < 700) ? 220 : 400
    };
  }

  changeYear(year) {
    this.setState({
      active: year,
      pieData: pieChartDesktopOperatingSystemByYear[year],
      barData: barChartDesktopOperatingSystemByYear[year]
    });
  }

  render() {
    return (
      <div className="panel panel-default pie-chart-panel">
        <div className="panel-heading">PieChart - Desktop Operating System (%) - <strong>year {this.state.active}</strong></div>
        <ViewSourceOnGithub path="/src/components/d3act/PieChartPanel/PieChartPanel.js"/>
        <div className="panel-body text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group" role="group">
                {Object.keys(pieChartDesktopOperatingSystemByYear).sort((a, b) => b - a).map((year) => {
                  let className = 'btn btn-default';
                  className += this.state.active === year ? ' active' : '';
                  return (<button key={year} type="button" className={className} onClick={() => {
                    this.changeYear(year);
                  }}>{year}</button>);
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" style={{position: 'static'}}>
              <Chart
                type={"pie"}
                width={this.state.size}
                height={this.state.size}
                data={this.state.pieData}
              />
            </div>
            <div className="col-md-6" style={{position: 'static'}}>
              <Chart
                type={"bar"}
                margin={{ top: 40, right: 0, bottom: 40, left: 40 }}
                width={this.state.size}
                height={this.state.size}
                data={this.state.barData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group" role="group">
                {Object.keys(pieChartDesktopOperatingSystemByYear).sort((a, b) => b - a).map((year) => {
                  let className = 'btn btn-default';
                  className += this.state.active === year ? ' active' : '';
                  return (<button key={year} type="button" className={className} onClick={() => {
                    this.changeYear(year);
                  }}>{year}</button>);
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}