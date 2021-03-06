import {Component} from '../Base/Component';
import {IResultsComponentBindings} from '../Base/ResultsComponentBindings';
import {IQueryResult} from '../../rest/QueryResult';
import {Utils} from '../../utils/Utils';
import {Initialization} from '../Base/Initialization';
import {$$} from '../../utils/Dom';

export interface IChatterTopicOption {
}

export class ChatterTopic extends Component {
  static ID = 'ChatterTopic';

  static fields = [
    'coveochatterfeedtopics'
  ];

  constructor(public element: HTMLElement, public options?: IChatterTopicOption, public bindings?: IResultsComponentBindings, public result?: IQueryResult) {
    super(element, ChatterTopic.ID, bindings);

    if (!Utils.isNullOrUndefined(result.raw.coveochatterfeedtopics)) {
      let rootElement = $$('div', {
        className: 'coveo-chatter-result-box-row'
      });

      let topics = result.raw.coveochatterfeedtopics.split(';');

      let icon = $$('div', {
        className: 'coveo-sprites-common-tagging_tag coveo-chatter-result-box-icon'
      })
      rootElement.append(icon.el);

      for (let i = 0; i < topics.length; i++) {
        let topic = $$('span');
        topic.text(topics[i]);
        rootElement.append(topic.el);

        if (i < topics.length - 1) {
          let separator = $$('span');
          separator.text(', ');
          rootElement.append(separator.el);
        }
      }
      $$(element).append(rootElement.el);
    }
  }
}

Initialization.registerAutoCreateComponent(ChatterTopic);
