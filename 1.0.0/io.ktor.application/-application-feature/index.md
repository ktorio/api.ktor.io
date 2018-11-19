---
title: ApplicationFeature - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="./index.html">ApplicationFeature</a></div>

# ApplicationFeature

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationFeature</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">TPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="keyword">out</span>&nbsp;<span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Defines an installable Application Feature

### Parameters

<code>TPipeline</code> - is the type of the pipeline this feature is compatible with

<code>TConfiguration</code> - is the type for the configuration object for this Feature

<code>TFeature</code> - is the type for the instance of the Feature object

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="index.html#TFeature"><span class="identifier">TFeature</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationFeature$install(io.ktor.application.ApplicationFeature.TPipeline, kotlin.Function1((io.ktor.application.ApplicationFeature.TConfiguration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="index.html#TPipeline"><span class="identifier">TPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationFeature$install(io.ktor.application.ApplicationFeature.TPipeline, kotlin.Function1((io.ktor.application.ApplicationFeature.TConfiguration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="index.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#TFeature"><span class="identifier">TFeature</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-shut-down-url/-application-call-feature/index.html">ApplicationCallFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">ApplicationCallFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.engine/-shut-down-url/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.engine/-shut-down-url/index.html"><span class="identifier">ShutDownUrl</span></a><span class="symbol">&gt;</span></code></div>

A feature to install into application call pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-auto-head-response/index.html">AutoHeadResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">AutoHeadResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

A feature that automatically respond to HEAD requests


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-shut-down-url/-engine-feature/index.html">EngineFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">EngineFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.engine/-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.engine/-shut-down-url/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.engine/-shut-down-url/index.html"><span class="identifier">ShutDownUrl</span></a><span class="symbol">&gt;</span></code></div>

A feature to install into engine pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.auth/-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.auth/-authentication/index.html"><span class="identifier">Authentication</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../../io.ktor.auth/-authentication/index.html">Authentication</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.freemarker/-free-marker/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<span class="identifier">Configuration</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.freemarker/-free-marker/index.html"><span class="identifier">FreeMarker</span></a><span class="symbol">&gt;</span></code></div>

A feature installing companion object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.gson/-gson-support/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<span class="identifier">GsonBuilder</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.gson/-gson-support/index.html"><span class="identifier">GsonSupport</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.locations/-locations/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.locations/-locations/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.locations/-locations/index.html"><span class="identifier">Locations</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../../io.ktor.locations/-locations/index.html">Locations</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.metrics/-metrics/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.metrics/-metrics/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.metrics/-metrics/index.html"><span class="identifier">Metrics</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.sessions/-sessions/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.sessions/-sessions/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.sessions/-sessions/index.html"><span class="identifier">Sessions</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.velocity/-velocity/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<span class="identifier">VelocityEngine</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.velocity/-velocity/index.html"><span class="identifier">Velocity</span></a><span class="symbol">&gt;</span></code></div>

A companion object for installing feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.webjars/-webjars/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.webjars/-webjars/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.webjars/-webjars/index.html"><span class="identifier">Webjars</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.websocket/-web-sockets/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.websocket/-web-sockets/-web-socket-options/index.html"><span class="identifier">WebSocketOptions</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.websocket/-web-sockets/index.html"><span class="identifier">WebSockets</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-c-o-r-s/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-c-o-r-s/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-c-o-r-s/index.html"><span class="identifier">CORS</span></a><span class="symbol">&gt;</span></code></div>

Feature object for installation


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-caching-headers/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-caching-headers/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-caching-headers/index.html"><span class="identifier">CachingHeaders</span></a><span class="symbol">&gt;</span></code></div>

<code>ApplicationFeature</code> implementation for <a href="../../io.ktor.features/-conditional-headers/index.html">ConditionalHeaders</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-call-id/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-call-id/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-call-id/index.html"><span class="identifier">CallId</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../../io.ktor.features/-call-id/index.html">CallId</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-call-logging/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-call-logging/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-call-logging/index.html"><span class="identifier">CallLogging</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../../io.ktor.features/-call-logging/index.html">CallLogging</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-compression/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-compression/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-compression/index.html"><span class="identifier">Compression</span></a><span class="symbol">&gt;</span></code></div>

<code>ApplicationFeature</code> implementation for <a href="../../io.ktor.features/-compression/index.html">Compression</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-conditional-headers/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-conditional-headers/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-conditional-headers/index.html"><span class="identifier">ConditionalHeaders</span></a><span class="symbol">&gt;</span></code></div>

<code>ApplicationFeature</code> implementation for <a href="../../io.ktor.features/-conditional-headers/index.html">ConditionalHeaders</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-content-negotiation/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-content-negotiation/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-content-negotiation/index.html"><span class="identifier">ContentNegotiation</span></a><span class="symbol">&gt;</span></code></div>

Implementation of an <a href="./index.md">ApplicationFeature</a> for the <a href="../../io.ktor.features/-content-negotiation/index.html">ContentNegotiation</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-data-conversion/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-data-conversion/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-data-conversion/index.html"><span class="identifier">DataConversion</span></a><span class="symbol">&gt;</span></code></div>

Object for installing feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-default-headers/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-default-headers/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-default-headers/index.html"><span class="identifier">DefaultHeaders</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../../io.ktor.features/-default-headers/index.html">DefaultHeaders</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-h-s-t-s/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-h-s-t-s/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-h-s-t-s/index.html"><span class="identifier">HSTS</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-https-redirect/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-https-redirect/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-https-redirect/index.html"><span class="identifier">HttpsRedirect</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-partial-content/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-partial-content/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-partial-content/index.html"><span class="identifier">PartialContent</span></a><span class="symbol">&gt;</span></code></div>

<code>ApplicationFeature</code> implementation for <a href="../../io.ktor.features/-partial-content/index.html">PartialContent</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-status-pages/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-status-pages/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-status-pages/index.html"><span class="identifier">StatusPages</span></a><span class="symbol">&gt;</span></code></div>

Feature installation object


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.routing/-routing/-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application/index.html"><span class="identifier">Application</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.routing/-routing/index.html"><span class="identifier">Routing</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.routing/-routing/index.html"><span class="identifier">Routing</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="../../io.ktor.routing/-routing/index.html">Routing</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-forwarded-header-support/index.html">ForwardedHeaderSupport</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">ForwardedHeaderSupport</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Forwarded header support. See RFC 7239 https://tools.ietf.org/html/rfc7239


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-x-forwarded-header-support/index.html">XForwardedHeaderSupport</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">XForwardedHeaderSupport</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-x-forwarded-header-support/-config/index.html"><span class="identifier">Config</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.features/-x-forwarded-header-support/-config/index.html"><span class="identifier">Config</span></a><span class="symbol">&gt;</span></code></div>

<code>X-Forwarded-*</code> headers support
See http://ktor.io/servers/features/forward-headers.html for details


</td>
</tr>
</tbody>
</table>
