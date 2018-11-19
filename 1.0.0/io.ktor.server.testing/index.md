---
title: io.ktor.server.testing - 
layout: api
---



## Package io.ktor.server.testing

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-engine-stress-suite/index.html">EngineStressSuite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">EngineStressSuite</span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-engine-test-base/index.html"><span class="identifier">EngineTestBase</span></a><span class="symbol">&lt;</span><a href="-engine-stress-suite/index.html#TEngine"><span class="identifier">TEngine</span></a><span class="symbol">,</span>&nbsp;<a href="-engine-stress-suite/index.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-test-base/index.html">EngineTestBase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">EngineTestBase</span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-test-suite/index.html">EngineTestSuite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">EngineTestSuite</span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-engine-test-base/index.html"><span class="identifier">EngineTestBase</span></a><span class="symbol">&lt;</span><a href="-engine-test-suite/index.html#TEngine"><span class="identifier">TEngine</span></a><span class="symbol">,</span>&nbsp;<a href="-engine-test-suite/index.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-it.html">It</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">It</span></code></div>

<a href="it.html">it</a> function receiver object


</td>
</tr>
<tr>
<td markdown="1">

<a href="-on.html">On</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">On</span></code></div>

<a href="on.html">on</a> function receiver object


</td>
</tr>
<tr>
<td markdown="1">

<a href="-stress-suite-runner/index.html">StressSuiteRunner</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">StressSuiteRunner</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">Runner</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-test-application-call/index.html">TestApplicationCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestApplicationCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-call/index.html"><span class="identifier">BaseApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Represents a test application call that is used in <a href="with-test-application.html">withTestApplication</a> and <a href="handle-request.html">handleRequest</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-test-application-engine/index.html">TestApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-engine/index.html"><span class="identifier">BaseApplicationEngine</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

ktor test engine that provides way to simulate application calls to existing application module(s)
without actual HTTP connection


</td>
</tr>
<tr>
<td markdown="1">

<a href="-test-application-request/index.html">TestApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-request/index.html"><span class="identifier">BaseApplicationRequest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Represents a test application request


</td>
</tr>
<tr>
<td markdown="1">

<a href="-test-application-response/index.html">TestApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-response/index.html"><span class="identifier">BaseApplicationResponse</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Represents test call response received from server


</td>
</tr>
<tr>
<td markdown="1">

<a href="-test-engine/index.html">TestEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">TestEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="-test-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="../io.ktor.server.engine/-application-engine-factory/index.html">ApplicationEngineFactory</a> providing a CIO-based <a href="../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-response/index.html"><span class="identifier">TestApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Return parsed content type from the test response


</td>
</tr>
<tr>
<td markdown="1">

<a href="cookies-session.html">cookiesSession</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">cookiesSession</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$cookiesSession(io.ktor.server.testing.TestApplicationEngine, kotlin.Function0((kotlin.Unit)))/callback">callback</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Keep cookies between requests inside the <a href="cookies-session.html#io.ktor.server.testing$cookiesSession(io.ktor.server.testing.TestApplicationEngine, kotlin.Function0((kotlin.Unit)))/callback">callback</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="create-test-environment.html">createTestEnvironment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createTestEnvironment</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$createTestEnvironment(kotlin.Function1((io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine-environment-builder/index.html"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.server.engine/-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Creates test application engine environment


</td>
</tr>
<tr>
<td markdown="1">

<a href="handle-request.html">handleRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">handleRequest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$handleRequest(io.ktor.server.testing.TestApplicationEngine, io.ktor.http.HttpMethod, kotlin.String, kotlin.Function1((io.ktor.server.testing.TestApplicationRequest, kotlin.Unit)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$handleRequest(io.ktor.server.testing.TestApplicationEngine, io.ktor.http.HttpMethod, kotlin.String, kotlin.Function1((io.ktor.server.testing.TestApplicationRequest, kotlin.Unit)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$handleRequest(io.ktor.server.testing.TestApplicationEngine, io.ktor.http.HttpMethod, kotlin.String, kotlin.Function1((io.ktor.server.testing.TestApplicationRequest, kotlin.Unit)))/setup">setup</span><span class="symbol">:</span>&nbsp;<a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-test-application-call/index.html"><span class="identifier">TestApplicationCall</span></a></code></div>

Make a test request


</td>
</tr>
<tr>
<td markdown="1">

<a href="it.html">it</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-on.html"><span class="identifier">On</span></a><span class="symbol">.</span><span class="identifier">it</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.testing$it(io.ktor.server.testing.On, kotlin.String, kotlin.Function1((io.ktor.server.testing.It, kotlin.Unit)))/description">description</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.testing$it(io.ktor.server.testing.On, kotlin.String, kotlin.Function1((io.ktor.server.testing.It, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="-it.html"><span class="identifier">It</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

DSL function for test test case assertions


</td>
</tr>
<tr>
<td markdown="1">

<a href="on.html">on</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">on</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.testing$on(kotlin.String, kotlin.Function1((io.ktor.server.testing.On, kotlin.Unit)))/comment">comment</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.testing$on(kotlin.String, kotlin.Function1((io.ktor.server.testing.On, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="-on.html"><span class="identifier">On</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

DSL for creating a test case


</td>
</tr>
<tr>
<td markdown="1">

<a href="set-body.html">setBody</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">setBody</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set HTTP request body text content

<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">setBody</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.ByteArray)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set HTTP request body bytes

<div class="signature"><code><span class="keyword">fun </span><a href="-test-application-request/index.html"><span class="identifier">TestApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">setBody</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)))/boundary">boundary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$setBody(io.ktor.server.testing.TestApplicationRequest, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)))/parts">parts</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set multipart HTTP request body


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-application.html">withApplication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">withApplication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withApplication(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withApplication.R)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a>&nbsp;<span class="symbol">=</span>&nbsp;createTestEnvironment()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withApplication(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withApplication.R)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-test-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withApplication(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withApplication.R)))/test">test</span><span class="symbol">:</span>&nbsp;<a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="with-application.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="with-application.html#R"><span class="identifier">R</span></a></code></div>

Start test application engine, pass it to <a href="with-application.html#io.ktor.server.testing$withApplication(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withApplication.R)))/test">test</a> function and stop it


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-test-application.html">withTestApplication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">withTestApplication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/test">test</span><span class="symbol">:</span>&nbsp;<a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="with-test-application.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="with-test-application.html#R"><span class="identifier">R</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">withTestApplication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.application.Application, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/moduleFunction">moduleFunction</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.application.Application, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/test">test</span><span class="symbol">:</span>&nbsp;<a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="with-test-application.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="with-test-application.html#R"><span class="identifier">R</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">withTestApplication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.application.Application, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/moduleFunction">moduleFunction</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.application.Application, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-test-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.application.Application, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)), kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/test">test</span><span class="symbol">:</span>&nbsp;<a href="-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="with-test-application.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="with-test-application.html#R"><span class="identifier">R</span></a></code></div>

Start test application engine, pass it to <a href="with-test-application.html#io.ktor.server.testing$withTestApplication(kotlin.Function1((io.ktor.server.testing.TestApplicationEngine, io.ktor.server.testing.withTestApplication.R)))/test">test</a> function and stop it


</td>
</tr>
</tbody>
</table>
