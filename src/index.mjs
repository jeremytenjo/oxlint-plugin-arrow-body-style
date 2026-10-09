const message =
  'Arrow function should have braces and explicit return statement. Change `() => expr` to `() => { return expr }'

export default {
  meta: {
    name: 'arrow-body-style',
  },
  rules: {
    always: {
      meta: {
        type: 'layout',
        docs: {
          description: 'Require braces and an explicit return statement for arrow functions.',
        },
        fixable: 'code',
      },
      create(context) {
        return {
          ArrowFunctionExpression(node) {
            if (node.body.type === 'BlockStatement') return

            context.report({
              node: node.body,
              message,
              fix(fixer) {
                const body = context.sourceCode.getText(node.body)
                return fixer.replaceText(node.body, `{ return ${body} }`)
              },
            })
          },
        }
      },
    },
  },
}
