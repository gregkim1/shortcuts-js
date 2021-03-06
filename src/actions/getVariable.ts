import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Variable
 * @section Actions > Scripting > Variables
 * @icon Variable
 *
 * Gets the value of the specified variable and passes it to the next action.
 *
 * ```js
 * getVariable({
 *   variable: variable('My Variable'),
 * });
 * ```
 */

const getVariable = (
  {
    variable,
  }: {
    /** The variable to get */
    variable: Variable;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
  WFWorkflowActionParameters: {
    WFVariable: variable,
  },
});

export default getVariable;
