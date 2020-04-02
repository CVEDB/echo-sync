export const previewSnippet = {
  title: 'RippleButton',
  expertise: 'Intermediate',
  primaryTag: 'Visual',
  language: 'React',
  icon: 'react',
  description: '<p>Renders a button that animates a ripple effect when clicked.</p>',
  url: '/react/s/ripple-button',
  searchTokens: 'ripplebutton jsx react visual state effect render button anim rippl click',
};

export const previewBlogSnippet = {
  title: 'What are CSS variables and where can I use them?',
  expertise: 'Blog',
  primaryTag: 'CSS',
  icon: 'blog',
  description: '<p>Learn how CSS custom properties (CSS variables) work and what you can use them for in your code and designs.</p>',
  url: '/blog/s/css-variables',
  searchTokens: 'css visual layout learn custom properti variabl work can us code design',
};

export const searchResultSnippet = {
  title: 'compose',
  expertise: 'Intermediate',
  primaryTag: 'Function',
  language: 'JavaScript',
  icon: 'js',
  description: '<p>Performs right-to-left function composition.</p>', 'url': '/js/s/compose',
  searchTokens: 'compose js javascript function perform right-to-left composit',
  score: 1.01,
};

export const fullSnippet = {
  'id': '30code/snippets/mapString',
  'title': 'mapString',
  'description': 'Creates a new string with the results of calling a provided function on every character in the calling string.',
  'url': 'https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/mapString.md',
  'slug': '/js/s/map-string',
  'firstSeen': '2018-07-14T07:59:56.000Z',
  'lastUpdated': '2019-08-13T07:29:12.000Z',
  'expertise': 'Beginner',
  'language': {
    'long': 'JavaScript',
    'short': 'js',
    'otherLanguages': null,
  },
  'icon': 'js',
  'tags': {
    'primary': 'String',
    'all': [
      'String',
      'Array',
      'Function',
      'Utility',
      'Beginner',
    ],
  },
  'html': {
    'code': "<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">mapString</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">str<span class=\"token punctuation\">,</span> fn</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n  str\n    <span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">''</span><span class=\"token punctuation\">)\n    .</span><span class=\"token function\">map</span><span class=\"token punctuation\">((</span><span class=\"token parameter\">c<span class=\"token punctuation\">,</span> i</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">fn</span><span class=\"token punctuation\">(</span>c<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">,</span> str<span class=\"token punctuation\">))\n    .</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">''</span><span class=\"token punctuation\">);</span>",
    'example': "<span class=\"token function\">mapString</span><span class=\"token punctuation\">(</span><span class=\"token string\">'lorem ipsum'</span><span class=\"token punctuation\">,</span> <span class=\"token parameter\">c</span> <span class=\"token operator\">=></span> c<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">());</span> <span class=\"token comment\">// 'LOREM IPSUM'</span>",
    'style': null,
    'description': '<p>Creates a new string with the results of calling a provided function on every character in the calling string.</p>',
    'fullDescription': '<p>Creates a new string with the results of calling a provided function on every character in the calling string.</p>\n<p>Use <code class="language-text">String.prototype.split(\'\')</code> and <code class="language-text">Array.prototype.map()</code> to call the provided function, <code class="language-text">fn</code>, for each character in <code class="language-text">str</code>.\nUse <code class="language-text">Array.prototype.join(\'\')</code> to recombine the array of characters into a string.\nThe callback function, <code class="language-text">fn</code>, takes three arguments (the current character, the index of the current character and the string <code class="language-text">mapString</code> was called upon).</p>\n',
  },
  'code': {
    'src': "const mapString = (str, fn) =>\n  str\n    .split('')\n    .map((c, i) => fn(c, i, str))\n    .join('');",
    'example': "mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'",
    'style': null,
  },
};

export const fullReactSnippet = {
  'id': '30react/snippets/TagInput',
  'title': 'TagInput',
  'description': 'Renders a tag input field.',
  'url': 'https://github.com/30-seconds/30-seconds-of-react/blob/master/snippets/TagInput.md',
  'slug': '/react/s/tag-input',
  'firstSeen': '2019-10-02T07:06:11.000Z',
  'lastUpdated': '2019-10-11T11:20:45.000Z',
  'expertise': 'Intermediate',
  'language': {
    'long': 'React',
    'short': 'jsx',
    'otherLanguages': [
      {
        'short': 'css',
        'long': 'CSS',
      },
    ],
  },
  'icon': 'react',
  'tags': {
    'primary': 'Input',
    'all': [
      'Input',
      'Visual',
      'State',
      'Intermediate',
    ],
  },
  'html': {
    'code': '<span class="token keyword">function</span> <span class="token function">TagInput</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">) {</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>tags<span class="token punctuation">,</span> setTags<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>tags<span class="token punctuation">);</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">removeTags</span> <span class="token operator">=</span> <span class="token parameter">indexToRemove</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setTags</span><span class="token punctuation">([</span><span class="token operator">...</span>tags<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">((</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> index <span class="token operator">!==</span> indexToRemove<span class="token punctuation">)]);\n  };</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">addTags</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token operator">!==</span> <span class="token string">""</span><span class="token punctuation">) {</span>\n      <span class="token function">setTags</span><span class="token punctuation">([</span><span class="token operator">...</span>tags<span class="token punctuation">,</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">]);</span>\n      event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;\n    }\n  };</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">="</span>tag-input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">="</span>tags<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span>tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">((</span><span class="token parameter">tag<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">="</span>tag<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">="</span>tag-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>tag<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">="</span>tag-close-icon<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{()</span> <span class="token operator">=></span> <span class="token function">removeTags</span><span class="token punctuation">(</span>index<span class="token punctuation">)}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              x\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">))}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">="</span>text<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onKeyUp</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"Enter"</span> <span class="token operator">?</span> <span class="token function">addTags</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">="</span>Press enter to add tags<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">);\n}</span>',
    'example': "ReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TagInput</span></span> <span class=\"token attr-name\">tags</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{[</span><span class=\"token string\">'Nodejs'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'MongoDB'</span><span class=\"token punctuation\">]}</span></span><span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'root'</span><span class=\"token punctuation\">));</span>",
    'style': '<span class="token selector">.tag-input</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n  <span class="token property">min-height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0 8px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #d6d8da<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;\n}</span>\n<span class="token selector">.tag-input input</span> <span class="token punctuation">{</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 4px 0 0<span class="token selector">;\n  &amp;:focus</span> <span class="token punctuation">{</span>\n    <span class="token property">outline</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;\n  }\n}</span>\n<span class="token selector">#tags</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 8px 0 0<span class="token punctuation">;\n}</span>\n<span class="token selector">.tag</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0 8px<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0 8px 8px 0<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #0052cc<span class="token punctuation">;\n}</span>\n<span class="token selector">.tag-title</span> <span class="token punctuation">{</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;\n}</span>\n<span class="token selector">.tag-close-icon</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #0052cc<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;\n}</span>',
    'description': '<p>Renders a tag input field.</p>',
    'fullDescription': '<p>Renders a tag input field.</p>\n<ul>\n<li>Define a <code class="language-text">TagInput</code> component and use <code class="language-text">React.useState()</code> hook to initialize an array with tags passed as <code class="language-text">props</code>.</li>\n<li>Use <code class="language-text">Array.prototype.map()</code> on collected nodes to render the list of tags.</li>\n<li>Define the <code class="language-text">addTags</code> method, which will be executed on pressing the <code class="language-text">Enter</code> key.</li>\n<li>The <code class="language-text">addTags</code> method uses the <code class="language-text">setTags</code> method to add the new tag using the spread (<code class="language-text">...</code>) operator to prepend the existing tags and adds the new tag at the end of the <code class="language-text">tags</code> array.</li>\n<li>Define the <code class="language-text">removeTags</code> method, which will be executed on clicking the delete icon in the tag.</li>\n<li>Use <code class="language-text">Array.prototype.filter()</code> in <code class="language-text">removeTags</code> method to remove the tag using the <code class="language-text">index</code> of the tag to filter it out from <code class="language-text">tags</code> array.</li>\n</ul>\n',
  },
  'code': {
    'src': 'function TagInput(props) {\n  const [tags, setTags] = React.useState(props.tags);\n  const removeTags = indexToRemove => {\n    setTags([...tags.filter((_, index) => index !== indexToRemove)]);\n  };\n  const addTags = event => {\n    if (event.target.value !== "") {\n      setTags([...tags, event.target.value]);\n      event.target.value = "";\n    }\n  };\n  return (\n    <div className="tag-input">\n      <ul id="tags">\n        {tags.map((tag, index) => (\n          <li key={index} className="tag">\n            <span className="tag-title">{tag}</span>\n            <span className="tag-close-icon" onClick={() => removeTags(index)}>\n              x\n            </span>\n          </li>\n        ))}\n      </ul>\n      <input\n        type="text"\n        onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}\n        placeholder="Press enter to add tags"\n      />\n    </div>\n  );\n}',
    'example': "ReactDOM.render(<TagInput tags={['Nodejs', 'MongoDB']}/>, document.getElementById('root'));",
    'style': '.tag-input {\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 48px;\n  padding: 0 8px;\n  border: 1px solid #d6d8da;\n  border-radius: 6px;\n}\n.tag-input input {\n  flex: 1;\n  border: none;\n  height: 46px;\n  font-size: 14px;\n  padding: 4px 0 0;\n  &:focus {\n    outline: transparent;\n  }\n}\n#tags {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 8px 0 0;\n}\n.tag {\n  width: auto;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  padding: 0 8px;\n  font-size: 14px;\n  list-style: none;\n  border-radius: 6px;\n  margin: 0 8px 8px 0;\n  background: #0052cc;\n}\n.tag-title {\n  margin-top: 3px;\n}\n.tag-close-icon {\n  display: block;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n  font-size: 14px;\n  margin-left: 8px;\n  color: #0052cc;\n  border-radius: 50%;\n  background: #fff;\n  cursor: pointer;\n}',
  },
};
