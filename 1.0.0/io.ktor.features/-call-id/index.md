---
title: CallId - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">CallId</a></div>

# CallId

<div class="signature"><code><span class="keyword">class </span><span class="identifier">CallId</span></code></div>

Retrieves and generates if necessary a call id. A call id (or correlation id) could be retrieved_ from a call
via <a href="-configuration/retrieve.html">CallId.Configuration.retrieve</a> function. Multiple retrieve functions could be configured that will be invoked
one by one until one of them return non-null value. If no value has been provided by retrievers then a generator
could be applied to generate a new call id. Generators could be provided via <a href="-configuration/generate.html">CallId.Configuration.generate</a> function.
Similar to retrieve, multiple generators could be configured so they will be invoked one by one.
Usually call id is passed via <a href="../../io.ktor.http/-http-headers/-x-request-id.html">io.ktor.http.HttpHeaders.XRequestId</a> so
one could use <a href="-configuration/retrieve-from-header.html">CallId.Configuration.retrieveFromHeader</a> function to retrieve call id from a header.

All retrieved or generated call ids are verified against <a href="../-c-a-l-l_-i-d_-d-e-f-a-u-l-t_-d-i-c-t-i-o-n-a-r-y.html">CALL_ID_DEFAULT_DICTIONARY</a> by default. Alternatively
a custom dictionary or functional predicate could be provided via <a href="-configuration/verify.html">CallId.Configuration.verify</a> that could
pass a valid call id, discard an illegal call id
or reject completely an <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> with <a href="../../io.ktor.http/-http-status-code/-bad-request.html">HttpStatusCode.BadRequest</a> if an <a href="../-rejected-call-id-exception/index.html">RejectedCallIdException</a> is thrown.
Please note that this rejection functionality is not compatible with <a href="../-status-pages/index.html">StatusPages</a> for now and you cannot
configure rejection response message.

Once a call id is retrieved or generated, it could be accessed via <a href="../call-id.html">ApplicationCall.callId</a> otherwise it will be
always <code>null</code>. Also a call id could be replied with response by registering <a href="-configuration/reply.html">CallId.Configuration.reply</a> or
<a href="-configuration/reply-to-header.html">CallId.Configuration.replyToHeader</a> so client will be able to know call id in case when it is generated.

Please note that call id feature is only intended for debugging and troubleshooting purposes to correlate
client requests with logs in multitier/microservices architecture. So usually it is not guaranteed that call id
is strictly random/unique. This is why you should NEVER rely on it's uniqueness.

<a href="./index.md">CallId</a> feature will be installed to <a href="-feature/phase.html">CallId.phase</a> into <a href="../../io.ktor.application/-application-call-pipeline/index.html">ApplicationCallPipeline</a>.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

<a href="./index.md">CallId</a> feature's configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">CallId</span></a><span class="symbol">&gt;</span></code></div>

Installable feature for <a href="./index.md">CallId</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">CallId</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="phase.html">phase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">phase</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

<a href="../../io.ktor.application/-application-call-pipeline/index.html">ApplicationCallPipeline</a>'s phase which this feature will be installed to


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallId.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.CallId.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallId.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.CallId.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">CallId</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
