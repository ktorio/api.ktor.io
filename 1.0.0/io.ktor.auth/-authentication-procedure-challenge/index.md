---
title: AuthenticationProcedureChallenge - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">AuthenticationProcedureChallenge</a></div>

# AuthenticationProcedureChallenge

<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationProcedureChallenge</span></code></div>

Represents authentication challenging procedure requested by authentication mechanism

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">AuthenticationProcedureChallenge</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Represents authentication challenging procedure requested by authentication mechanism


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="challenges.html">challenges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">challenges</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">AuthenticationProcedureChallenge</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

List of currently installed challenges except errors


</td>
</tr>
<tr>
<td markdown="1">

<a href="completed.html">completed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">completed</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Represents if a challenge was successfully sent to the client and challenging should be stopped


</td>
</tr>
<tr>
<td markdown="1">

<a href="error-challenges.html">errorChallenges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">errorChallenges</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">AuthenticationProcedureChallenge</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

List of currently installed challenges for errors


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="complete.html">complete</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">complete</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Completes a challenging procedure


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
