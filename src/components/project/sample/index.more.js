import React from 'react'
import CodeBlock from '@theme/CodeBlock'


export default () => {

  return <div class={`        
  border-l-0
  border-r-0
  border-b-0
       border-t-2
       border-dashed
       border-gray-400
       mt-10        
        px-6
        md:px-6      
        py-8
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          max-w-3xl
        `}>
      <div className={`my-6`}>
        <h2>{`Quick start 🚀`}</h2>
      </div>
      <p className={``}>
        <h3>1. Generate a new project</h3>
        <CodeBlock language="language-bash">
          {"yo clinext -t app -q"}
        </CodeBlock>
      </p>
      <p className={``}>
        <h3>2. Add models with schema</h3>
        <CodeBlock language="json">
          {`{
        "className": "Creation",
        "fields": {
          "objectId": {
              "type": "String"
          },
          "createdAt": {
              "type": "Date"
          },
          "updatedAt": {
              "type": "Date"
          },
          "ACL": {
              "type": "ACL"
          },
          "name": {
              "type": "String"
          }
        }
      }`}
        </CodeBlock>
      </p>
      <p className={``}>
        <h3>3. Add features to your class</h3>
        <CodeBlock language="language-bash">
          {"yarn add @clinext-community/localable\nyarn add @clinext-community/countryable"}
        </CodeBlock>
        <CodeBlock language="js">
          {`export default class Creation extends CliNext.App.Object {
            static features = [
              'localable',          
            ]
          ...
          }`}
        </CodeBlock>
      </p>
      <p className={``}>
        The creation table is now localable, which means it contains columns for a string locale and pointer to a rich locale entry in a LocaleRef table handled by the localable feature.
        The localable feature automatically adds a default locale that you can define to every Creation object by using triggers.
      </p>
    </div>
  </div>
}