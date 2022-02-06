"us strict";
//=========================================================
//---------------------------------------------------------
//++++++++++++
//Pressets:
//Markdown:
marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();
//---------------------------------------------------------
//Elements:
const root = document.getElementById("root");
//---------------------------------------------------------
//---------------------------------------------------------
const pressets = {
  Editor: {
    //++++++++++++
    container: {
      classNames: "container d-flex flex-column align-items-center mb-3 mt-3",
      styles: {},
    },
    //++++++++++++
    label: {
      classNames: "fw-bold m-4 fs-3",
    },
    //++++++++++++
    textarea: {
      classNames: "m-auto border rounded border-3 border-dark",
    },
    //++++++++++++
  },
  //---------------------------------------------------------
  Preview: {
    classNames:
      "container bg-dark text-light text-break border border-3 border-warning",
    styles: {
      minHeight: "100px",
    },
  },
  //---------------------------------------------------------
  App: {
    classNames: "container-fluid bg-info",
  },
};
//=========================================================
//Components:
const Editor = ({ text, handler, update, ...props }) => {
  //Render:
  React.useEffect(() => {
    update(props.initialText);
  }, []);
  return (
    <div className={pressets.Editor.container.classNames}>
      <label className={pressets.Editor.label.classNames} htmlFor="editor">
        Editor
      </label>
      <textarea
        className={pressets.Editor.textarea.classNames}
        onChange={handler}
        value={text || props.initialText}
        autoFocus
        rows="10"
        cols="70"
        id="editor"
        name="editor"
      >
        {props.initialText}
      </textarea>
    </div>
  );
};
Editor.defaultProps = {
  initialText: `# Markdown previewer
  ## h2 title
  [task link](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  ### Inline code:
  \`const func = () => 'inline code'\`
  ### Code blocks:
      const defaultMarkdownText = {
          h1: "done",
          h2: "done",
          link: "done",
          inlineCode: "done",
          toBeContinued: "true"
      };
  ### To do:
  + Drum Machine
  + JavaScript Calculator
  + 25 + 5 Clock
  ![[WebMeUp]](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU)Evolution
  > This is **good experience** 
    `,
};
//---------------------------------------------------------
const Preview = ({ text }) => {
  console.log(marked);
  return (
    <div
      className={pressets.Preview.classNames}
      style={pressets.Preview.styles}
      dangerouslySetInnerHTML={{
        __html: marked.parse(text, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
};

//Functions:
//Render:
//---------------------------------------------------------
const App = (props) => {
  const [markdownText, setMarkdownText] = React.useState("");
  const updateState = (value) => {
    return setMarkdownText(value);
  };
  const handler = (event) => {
    return setMarkdownText(event.target.value);
  };
  return (
    <div className={pressets.App.classNames}>
      <Editor text={markdownText} handler={handler} update={updateState} />
      <Preview text={markdownText} />
    </div>
  );
};
//=========================================================
ReactDOM.render(<App />, root);
