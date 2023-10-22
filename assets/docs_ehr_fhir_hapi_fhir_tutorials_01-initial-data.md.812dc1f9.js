import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1809cda4.js";const p=JSON.parse('{"title":"HAPI FHIR Tutorial - Data initialzation","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ehr/fhir/hapi_fhir/tutorials/01-initial-data.md","filePath":"docs/ehr/fhir/hapi_fhir/tutorials/01-initial-data.md","lastUpdated":1697933515000}'),o={name:"docs/ehr/fhir/hapi_fhir/tutorials/01-initial-data.md"},e=[l('<h1 id="hapi-fhir-tutorial-data-initialzation" tabindex="-1">HAPI FHIR Tutorial - Data initialzation <a class="header-anchor" href="#hapi-fhir-tutorial-data-initialzation" aria-label="Permalink to &quot;HAPI FHIR Tutorial - Data initialzation&quot;">​</a></h1><p>These toturials are using fhirpy to connect HAPI FHIR server. The HAPI FHIR server is running at local docker container with <code>http://localhost:8080</code>.</p><ul><li>environment <ul><li><a href="https://github.com/hapifhir/hapi-fhir-jpaserver-starter" target="_blank" rel="noreferrer">hapi-fhir-jpaserver</a></li><li><a href="https://pypi.org/project/fhirpy/" target="_blank" rel="noreferrer">fhirpy</a> v1.4.2</li><li>docker</li><li>python 3.9+</li></ul></li><li>data <ul><li>synthea_sample_data_fhir_r4</li></ul></li></ul><h2 id="import-library" tabindex="-1">Import Library <a class="header-anchor" href="#import-library" aria-label="Permalink to &quot;Import Library&quot;">​</a></h2><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> os</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sys</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> json</span></span>\n<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> fhirpy </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AsyncFHIRClient</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> os</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> sys</span></span>\n<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> json</span></span>\n<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> fhirpy </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> AsyncFHIRClient</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="create-a-fhir-server-connection" tabindex="-1">Create a FHIR server connection <a class="header-anchor" href="#create-a-fhir-server-connection" aria-label="Permalink to &quot;Create a FHIR server connection&quot;">​</a></h2><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>\n<span class="line"><span style="color:#E1E4E8;">client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> AsyncFHIRClient(</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;http://localhost:8080/fhir/&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">authorization</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;Bearer TOKEN&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>\n<span class="line"><span style="color:#24292E;">client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> AsyncFHIRClient(</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;http://localhost:8080/fhir/&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">authorization</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;Bearer TOKEN&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="initialize" tabindex="-1">Initialize <a class="header-anchor" href="#initialize" aria-label="Permalink to &quot;Initialize&quot;">​</a></h2><ul><li>Run the next command to import prepared dataset</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dataset_path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./dataset&#39;</span></span>\n<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> import_dataset(client, dataset_path)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dataset_path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./dataset&#39;</span></span>\n<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> import_dataset(client, dataset_path)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Functions for load FHIR json files to FHIR server</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import_dataset</span><span style="color:#E1E4E8;">(client, dataset_path):</span></span>\n<span class="line"><span style="color:#E1E4E8;">  sys.stdout.write(</span><span style="color:#9ECBFF;">&quot;Import progress: 0%   </span><span style="color:#79B8FF;">\\r</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8;">  filenames </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>\n<span class="line"><span style="color:#E1E4E8;">    filename </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> filename </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> os.listdir(dataset_path)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> filename.endswith(</span><span style="color:#9ECBFF;">&#39;.json&#39;</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">  ]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8;">  total_count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(filenames)</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> index, filename </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">enumerate</span><span style="color:#E1E4E8;">(filename):</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> import_bundle(client, os.path.join(dataset_path, filename))</span></span>\n<span class="line"><span style="color:#E1E4E8;">    progress </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">float</span><span style="color:#E1E4E8;">(index </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">float</span><span style="color:#E1E4E8;">(total_count)</span><span style="color:#F97583;">*</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    sys.stdout.write(</span><span style="color:#9ECBFF;">&quot;Import progress: </span><span style="color:#79B8FF;">%d%%</span><span style="color:#9ECBFF;">   </span><span style="color:#79B8FF;">\\r</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> progress)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    sys.stdout.flush()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8;">  sys.stdout.write(</span><span style="color:#9ECBFF;">&quot;Import progress: 100%</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">  sys.stdout.write(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">{0}</span><span style="color:#9ECBFF;"> bundles imported&quot;</span><span style="color:#E1E4E8;">.format(total_count))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">import_bundle</span><span style="color:#E1E4E8;">(client, filename):</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">(filename, </span><span style="color:#FFAB70;">encoding</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> fd:</span></span>\n<span class="line"><span style="color:#E1E4E8;">    patient_json </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> json.load(fd)</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span></span>\n<span class="line"><span style="color:#E1E4E8;">  boundle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.resource(</span><span style="color:#9ECBFF;">&#39;Bundle&#39;</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">  bundle[</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;transcation&#39;</span></span>\n<span class="line"><span style="color:#E1E4E8;">  bundle[</span><span style="color:#9ECBFF;">&#39;entry&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> patient_json[</span><span style="color:#9ECBFF;">&#39;entry&#39;</span><span style="color:#E1E4E8;">]</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> bundle.save()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import_dataset</span><span style="color:#24292E;">(client, dataset_path):</span></span>\n<span class="line"><span style="color:#24292E;">  sys.stdout.write(</span><span style="color:#032F62;">&quot;Import progress: 0%   </span><span style="color:#005CC5;">\\r</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292E;">  filenames </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>\n<span class="line"><span style="color:#24292E;">    filename </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> filename </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> os.listdir(dataset_path)</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> filename.endswith(</span><span style="color:#032F62;">&#39;.json&#39;</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">  ]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292E;">  total_count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(filenames)</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> index, filename </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">enumerate</span><span style="color:#24292E;">(filename):</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> import_bundle(client, os.path.join(dataset_path, filename))</span></span>\n<span class="line"><span style="color:#24292E;">    progress </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">float</span><span style="color:#24292E;">(index </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">float</span><span style="color:#24292E;">(total_count)</span><span style="color:#D73A49;">*</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">    sys.stdout.write(</span><span style="color:#032F62;">&quot;Import progress: </span><span style="color:#005CC5;">%d%%</span><span style="color:#032F62;">   </span><span style="color:#005CC5;">\\r</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> progress)</span></span>\n<span class="line"><span style="color:#24292E;">    sys.stdout.flush()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292E;">  sys.stdout.write(</span><span style="color:#032F62;">&quot;Import progress: 100%</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">  sys.stdout.write(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">{0}</span><span style="color:#032F62;"> bundles imported&quot;</span><span style="color:#24292E;">.format(total_count))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">import_bundle</span><span style="color:#24292E;">(client, filename):</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(filename, </span><span style="color:#E36209;">encoding</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;utf-8&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> fd:</span></span>\n<span class="line"><span style="color:#24292E;">    patient_json </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> json.load(fd)</span></span>\n<span class="line"><span style="color:#24292E;">  </span></span>\n<span class="line"><span style="color:#24292E;">  boundle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.resource(</span><span style="color:#032F62;">&#39;Bundle&#39;</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">  bundle[</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;transcation&#39;</span></span>\n<span class="line"><span style="color:#24292E;">  bundle[</span><span style="color:#032F62;">&#39;entry&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> patient_json[</span><span style="color:#032F62;">&#39;entry&#39;</span><span style="color:#24292E;">]</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> bundle.save()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="check-resources" tabindex="-1">Check resources <a class="header-anchor" href="#check-resources" aria-label="Permalink to &quot;Check resources&quot;">​</a></h2><p>Now, we should load 27 patient resources, we can run below code to check it:</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">resources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.resources(</span><span style="color:#9ECBFF;">&#39;Patient&#39;</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> resources.count())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">resources </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.resources(</span><span style="color:#032F62;">&#39;Patient&#39;</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> resources.count())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>From this toturial we learned how to:</p><ul><li>upload synthea FHIR R4 patients <code>Bundle</code> resources to the HAPI fhir server.</li><li>check the loaded resources count.</li></ul>',18)];const t=s(o,[["render",function(s,l,p,o,t,r){return a(),n("div",null,e)}]]);export{p as __pageData,t as default};
