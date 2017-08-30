import React from 'react'
import _ from 'lodash'
import { Accordion, Label, Message } from 'semantic-ui-react'

const panels = (list) => {
  console.log(list)
  list = '';
  return (
    _.times(list.length, i => ({
      key: `panel-${i}`,
      title: <Label color='blue' content={`content`}/>,
      content: (
        <Message
          info
          header={`Title`}
          content={`Content`}
        />
      )
    }))
  )
}
/*_.times(list.length, i => ({
  key: `panel-${i}`,
  title: <Label color='blue' content={`content`}/>,
  content: (
    <Message
      info
      header={`Title`}
      content={`Content`}
    />
  ),
}))*/

const WellboresList = (self) => (
  <Accordion panels={panels(self.whells)} />
);

export default WellboresList