---
title: CallId.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallId</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

<a href="../index.html">CallId</a> feature's configuration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

<a href="../index.html">CallId</a> feature's configuration


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="generate.html">generate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">generate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$generate(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-call-id-provider.html"><span class="identifier">CallIdProvider</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<a href="generate.html#io.ktor.features.CallId.Configuration$generate(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</a> function will be applied when there is no call id retrieved. It should generate a string to be used
as call id or <code>null</code> if it is impossible to generate call id for some reason.
Note that it should conform to call id verification otherwise it may be discarded or may lead to
complete call rejection


</td>
</tr>
<tr>
<td markdown="1">

<a href="header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">header</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$header(kotlin.String)/headerName">headerName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Setup retrieve/reply cycle via HTTP request and response headers <a href="header.html#io.ktor.features.CallId.Configuration$header(kotlin.String)/headerName">headerName</a>.
Identical to <a href="retrieve-from-header.html">retrieveFromHeader</a> and <a href="reply-to-header.html">replyToHeader</a> invocations with the same <a href="header.html#io.ktor.features.CallId.Configuration$header(kotlin.String)/headerName">headerName</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="reply.html">reply</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">reply</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallId.Configuration$reply(kotlin.Function2((io.ktor.application.ApplicationCall, kotlin.String, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">call</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">,</span>&nbsp;<span class="parameterName">callId</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Replies with retrieved or generated <a href="../../call-id.html">callId</a>. Usually <a href="reply-to-header.html">replyToHeader</a> could be used instead.


</td>
</tr>
<tr>
<td markdown="1">

<a href="reply-to-header.html">replyToHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">replyToHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$replyToHeader(kotlin.String)/headerName">headerName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Replies retrieved or generated callId using HTTP response header <a href="reply-to-header.html#io.ktor.features.CallId.Configuration$replyToHeader(kotlin.String)/headerName">headerName</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="retrieve.html">retrieve</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">retrieve</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$retrieve(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-call-id-provider.html"><span class="identifier">CallIdProvider</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<a href="retrieve.html#io.ktor.features.CallId.Configuration$retrieve(kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/block">block</a> will be used to retrieve call id from a call. It should return <code>null</code> if no call id found in request


</td>
</tr>
<tr>
<td markdown="1">

<a href="retrieve-from-header.html">retrieveFromHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">retrieveFromHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$retrieveFromHeader(kotlin.String)/headerName">headerName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Fetch call id from a request header named <a href="retrieve-from-header.html#io.ktor.features.CallId.Configuration$retrieveFromHeader(kotlin.String)/headerName">headerName</a> that is treated as optional


</td>
</tr>
<tr>
<td markdown="1">

<a href="verify.html">verify</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verify</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$verify(kotlin.Function1((kotlin.String, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<a href="../../-call-id-verifier.html"><span class="identifier">CallIdVerifier</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Verify retrieved or generated call ids using the specified <a href="verify.html#io.ktor.features.CallId.Configuration$verify(kotlin.Function1((kotlin.String, kotlin.Boolean)))/predicate">predicate</a>. Should return <code>true</code> for valid
call ids, <code>false</code> to ignore an illegal retrieved or generated call id
or throw an <a href="../../-rejected-call-id-exception/index.html">RejectedCallIdException</a> to reject an <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a>.
Only one verify condition could be specified.
It is not recommended to disable verification (allow all call id values) as it could be abused
so that it may become a security risk.
By default there is always the default verifier against <a href="../../-c-a-l-l_-i-d_-d-e-f-a-u-l-t_-d-i-c-t-i-o-n-a-r-y.html">CALL_ID_DEFAULT_DICTIONARY</a>
so all illegal call ids will be discarded.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verify</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/dictionary">dictionary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/reject">reject</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Verify retrieved or generated call ids against the specified <a href="verify.html#io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/dictionary">dictionary</a>.
Rejects an <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a> if <a href="verify.html#io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/reject">reject</a> is <code>true</code>
otherwise an illegal call id will be simply ignored.
Only one verify condition or dictionary could be specified


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../generate.html">generate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">generate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;64<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/dictionary">dictionary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CALL_ID_DEFAULT_DICTIONARY<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Generates fixed <a href="../../generate.html#io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/length">length</a> call ids using the specified <a href="../../generate.html#io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/dictionary">dictionary</a>.
Please note that this function generates pseudo-random identifiers via regular <a href="http://docs.oracle.com/javase/6/docs/api/java/util/Random.html">java.util.Random</a>
and should not be considered as cryptographically secure.
Also note that you should use the same dictionary for <a href="../../-call-id-verifier.html">CallIdVerifier</a> otherwise a generated call id could be
discarded or may lead to complete call rejection.


</td>
</tr>
</tbody>
</table>
