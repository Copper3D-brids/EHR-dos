import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.b462f4d2.js";const i=JSON.parse('{"title":"OMOP on FHIR","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ehr/fhir/03-fhir-omop.md","filePath":"docs/ehr/fhir/03-fhir-omop.md","lastUpdated":1719269612000}'),o={name:"docs/ehr/fhir/03-fhir-omop.md"},l=[r('<h1 id="omop-on-fhir" tabindex="-1">OMOP on FHIR <a class="header-anchor" href="#omop-on-fhir" aria-label="Permalink to &quot;OMOP on FHIR&quot;">​</a></h1><h2 id="ehr-fhir-omop" tabindex="-1">EHR FHIR &amp; OMOP <a class="header-anchor" href="#ehr-fhir-omop" aria-label="Permalink to &quot;EHR FHIR &amp; OMOP&quot;">​</a></h2><p><img src="/ehr-docs/omop/omop-04.png" alt="image"></p><h2 id="observational-medical-outcomes-partnership-omop" tabindex="-1">Observational Medical Outcomes Partnership (OMOP) <a class="header-anchor" href="#observational-medical-outcomes-partnership-omop" aria-label="Permalink to &quot;Observational Medical Outcomes Partnership (OMOP)&quot;">​</a></h2><h3 id="what-are-difference-to-fhir-what-implementations-are-there-e-g-python-api" tabindex="-1">what are difference to FHIR, what implementations are there e.g. python API? <a class="header-anchor" href="#what-are-difference-to-fhir-what-implementations-are-there-e-g-python-api" aria-label="Permalink to &quot;what are difference to FHIR, what implementations are there e.g. python API?&quot;">​</a></h3><ul><li><a href="https://ohdsi.github.io/CommonDataModel/" target="_blank" rel="noreferrer">OMOP CDM</a> is an open community data standard, designed to standardize the structure and content of observational data and to enable efficient analyses that can produce reliable evidence.</li><li>The OMOP is no longer maintained, and OHDSI is carrying forward the OMOP legacy.</li><li>OMOP mainly focus on Observational data (structured data). FHIR supports multiple resources (Patient, Observation, ImagingStudy) structured and non-structured data. <ul><li>For the dicom images, they have a solution: <a href="https://github.com/OHDSI/OncologyWG/wiki" target="_blank" rel="noreferrer">Oncology-CDM extension</a>. park et al. employed this approach <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8790584/" target="_blank" rel="noreferrer">[5]</a></li></ul></li><li>The key to OMOP CDM is its standardized <a href="https://www.ohdsi.org/web/wiki/doku.php?id=documentation:vocabulary" target="_blank" rel="noreferrer">vocabularies</a>.</li><li>FHIR focuses on providing a secure interoperable environment for health service providers to exchange data and for application resources to access it in place while OHDSI and the OMOP CDM create an environment to support data research <a href="https://www.ohdsi.org/web/wiki/lib/exe/fetch.php?media=resources:ohdsionfhir_gatech.pdf" target="_blank" rel="noreferrer">[1]</a>.</li><li>Analysis tools for OMOP CDM <a href="https://www.bmd-software.com/news/omop-cdm-an-approach-for-standardizing-health-data/" target="_blank" rel="noreferrer">[2]</a>: <ul><li><a href="https://github.com/OHDSI/Achilles" target="_blank" rel="noreferrer">Achilles</a>: It is a R tool to generate report based on OMOP CDM data.</li><li><a href="https://github.com/OHDSI/Atlas" target="_blank" rel="noreferrer">Atlas</a>: It is a webapp(js) uses webapi to generate visualizations and reliable evidence based on Achilles reports.</li><li>Population-Level Estimation: enable comparisons between cohorts at the treatment level.</li><li>Patient-Level Prediction: predict outcomes from features extracted from the patients, for example, by training Deep Learning models.</li></ul></li><li>Implementation: <ul><li>convert EHR to a database file via different database platforms (MySQL, Oracle, PostgreSQL)</li><li>Using <a href="http://webapidoc.ohdsi.org/index.html#2146184560" target="_blank" rel="noreferrer">restful API</a>, <a href="https://github.com/OHDSI/WebAPI" target="_blank" rel="noreferrer">OHDSI WebAPI</a> has a server that allow user deploy it locally.</li><li>Seems no python API/tools be designed to connect their server.</li></ul></li></ul><h3 id="what-is-it-used-for-which-domain-clincial-research" tabindex="-1">What is it used for - which domain - clincial/research? <a class="header-anchor" href="#what-is-it-used-for-which-domain-clincial-research" aria-label="Permalink to &quot;What is it used for - which domain - clincial/research?&quot;">​</a></h3><ul><li><p>It is a standard and framework for EHR Data holders, to improve both the quality of healthcare data analytics as well as the usefulness of healthcare data to these stakeholders.</p></li><li><p>Researchers (epidemiologists, statisticians, biomedical informaticists, computer scientists, and clinicians ) -&gt; generate evidence from observational health data.</p></li><li><p><a href="https://www.ohdsi.org/web/wiki/doku.php?id=documentation:etl_best_practices" target="_blank" rel="noreferrer">Four steps to convert data to OMOP Common Data Model (CDM)</a>:</p><ul><li><p>Data experts and CDM experts together design the ETL(Extract, Transform, Load)</p></li><li><p>To achieve this can use two tools: <a href="https://www.ohdsi.org/web/wiki/doku.php?id=documentation:software:whiterabbit" target="_blank" rel="noreferrer">White Rabbit</a> and <a href="https://www.ohdsi.org/web/wiki/doku.php?id=documentation:software:whiterabbit#rabbit-in-a-hat" target="_blank" rel="noreferrer">Rabbit-in-a-Hat</a> designed by OHDSI team.</p></li><li><p>People with medical knowledge create the code mappings</p></li><li><p>The OMOP has its own Vocabulary, if the source data (EHR) uses different coding system, the designer should mapping the EHR stuffs to OMOP vocabulary manually via a tool <a href="https://www.ohdsi.org/web/wiki/doku.php?id=documentation:software:usagi" target="_blank" rel="noreferrer">Usagi</a>.</p></li><li><p>A technical person implements the ETL</p></li><li><p>All are involved in quality control</p></li><li><p><a href="https://www.bmd-software.com/news/omop-cdm-an-approach-for-standardizing-health-data/" target="_blank" rel="noreferrer">ETL</a>:</p><img width="1059" alt="image" src="/ehr-docs/omop/omop-01.png"></li></ul></li></ul><h3 id="how-extensively-is-it-adopted" tabindex="-1">How extensively is it adopted? <a class="header-anchor" href="#how-extensively-is-it-adopted" aria-label="Permalink to &quot;How extensively is it adopted?&quot;">​</a></h3><ul><li>FHIR is intended for the exchange of data between different institutions. Whereas OMOP provides a common data format to unify data from different databases <a href="https://www.nature.com/articles/s41597-022-01792-7#:~:text=OpenEHR%20on%20the%20other%20side,unify%20data%20from%20different%20databases." target="_blank" rel="noreferrer">[3]</a>. - Github stars: 117</li></ul><h3 id="omop-on-fhir-1" tabindex="-1">OMOP on Fhir<a href="https://www.ohdsi.org/web/wiki/lib/exe/fetch.php?media=resources:ohdsionfhir_gatech.pdf" target="_blank" rel="noreferrer">[1]</a>: <a class="header-anchor" href="#omop-on-fhir-1" aria-label="Permalink to &quot;OMOP on Fhir[[1]](https://www.ohdsi.org/web/wiki/lib/exe/fetch.php?media=resources:ohdsionfhir_gatech.pdf):&quot;">​</a></h3><ul><li><p>Architecture: [OHDSI environment: <a href="https://github.com/OHDSI/WebAPI" target="_blank" rel="noreferrer">WebAPI</a>] -&gt; [OMOP on FHIR: HAPI FHIR Server + OMOP v5 data repository + FHIR DSTU2(quite old) seems move on <a href="https://gitlab.miracum.org/miracum/etl/batch/deployment" target="_blank" rel="noreferrer">v3</a> now?] -&gt; [SMART on FHIR]</p><ul><li><p>Platform architecture Fig1:</p><img width="479" alt="image" src="/ehr-docs/omop/omop-02.png"></li><li><p>issues:</p><ul><li>Some key FHIR elements: patient demographic information, not in OMOP CDM.</li></ul></li><li><p>Data Mapping <a href="https://www.ohdsi.org/web/wiki/lib/exe/fetch.php?media=resources:ohdsionfhir_gatech.pdf" target="_blank" rel="noreferrer">[1]</a>: - OMOP to FHIR (DSTU 2) <img width="987" alt="image" src="/ehr-docs/omop/omop-03.png"></p></li><li><p>FHIR to OMOP:</p><ul><li>Because the FHIR covers a lot of information than OMOP CDM, so they decide to ignore the elements that cannot be mapped to the OMOP CDM unless FHIR requires these in the first version<a href="https://www.ohdsi.org/web/wiki/lib/exe/fetch.php?media=resources:ohdsionfhir_gatech.pdf" target="_blank" rel="noreferrer">[1]</a>.</li></ul></li></ul></li></ul><h3 id="relevant-study" tabindex="-1">Relevant study: <a class="header-anchor" href="#relevant-study" aria-label="Permalink to &quot;Relevant study:&quot;">​</a></h3><ul><li><p>Data infrastructures for AI in medical imaging: a report on the experiences of five EU projects <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10164664/" target="_blank" rel="noreferrer">[4]</a>.</p></li><li><p><a href="https://www.researchallofus.org/data-tools/methods/" target="_blank" rel="noreferrer">All of Us Research Hub - OMOP</a></p></li></ul>',14)];const n=e(o,[["render",function(e,r,i,o,n,s){return a(),t("div",null,l)}]]);export{i as __pageData,n as default};