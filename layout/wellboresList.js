import React from 'react'
import _ from 'lodash'
import { Api } from '../components/api'
import { Accordion, Label, Icon } from 'semantic-ui-react'

const getTypes = (item) => {
  return  (
    _.times(item.length, i => ({
      key: `panel-${i}`,
      title: <Label content={item[i]}/>
    }))
  )
}

const WellboresList = (self) => {
  var panel;
  var list = [
    {
      "content": "demoWell",
      "list": ["demoWellbore"]
    }
  ];
  panel =  (
    _.times(list.length, i => ({
      key: `panel-${i}`,
      title: <Label content={list[i].content}/>,
      content: (
        <Accordion panels={getTypes(list[i].list)} />
      )
    }))

  )
  Api.getWhells(this).then(function() {
      var list = JSON.parse(localStorage.getItem('whells'))
      console.log(list)

    }
  )

  return (
    /*<Accordion panels={panel} />*/
  <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      demoWell
    </Accordion.Title>
    <Accordion.Content>
      <Accordion>
        <Accordion.Title>
          <Icon name='dropdown' />
          demoWellbore
        </Accordion.Title>
        <Accordion.Content>
          <Accordion>
            <Accordion.Title>
              Time
            </Accordion.Title>
            <Accordion.Title>
              Deph
            </Accordion.Title>
            <Accordion.Title>
              FormationLog
            </Accordion.Title>
            <Accordion.Title>
              Lith
            </Accordion.Title>
            <Accordion.Title>
              Shlam
            </Accordion.Title>
            <Accordion.Title>
              PlanIncl
            </Accordion.Title>
            <Accordion.Title>
              MwdIncl
            </Accordion.Title>
            <Accordion.Title>
              Report
            </Accordion.Title>
            <Accordion.Title>
              Tubular
            </Accordion.Title>
            <Accordion.Title>
              WbGeometry
            </Accordion.Title>
            <Accordion.Title>
              Rig
            </Accordion.Title>
            <Accordion.Title>
              Location
            </Accordion.Title>
          </Accordion>
        </Accordion.Content>
      </Accordion>
    </Accordion.Content>
  </Accordion>
  )
}
/*
const WellboresList = (self) => (
  <Accordion panels={panel()} />
);
*/
export default WellboresList