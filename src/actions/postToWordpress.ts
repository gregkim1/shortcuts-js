import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.wordpress.post';

/**
 * @action Post to WordPress
 * @section Content Types > Sharing > WordPress
 * @icon Wordpress
 *
 * Posts the input to a WordPress blog as a new post or page.
 *
 * ```js
 * postToWordpress();
 * ```
 */
const postToWordpress = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

postToWordpress.identifier = identifier;
postToWordpress.invert = invert;

export default withActionOutput(postToWordpress);