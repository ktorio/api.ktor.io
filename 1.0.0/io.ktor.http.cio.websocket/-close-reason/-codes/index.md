---
title: CloseReason.Codes - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">CloseReason</a> / <a href="./index.html">Codes</a></div>

# Codes

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">Codes</span></code></div>

Standard close reason codes

see https://tools.ietf.org/html/rfc6455#section-7.4 for list of codes

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-n-o-r-m-a-l.html">NORMAL</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-g-o-i-n-g_-a-w-a-y.html">GOING_AWAY</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-p-r-o-t-o-c-o-l_-e-r-r-o-r.html">PROTOCOL_ERROR</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-a-n-n-o-t_-a-c-c-e-p-t.html">CANNOT_ACCEPT</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-n-o-t_-c-o-n-s-i-s-t-e-n-t.html">NOT_CONSISTENT</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-v-i-o-l-a-t-e-d_-p-o-l-i-c-y.html">VIOLATED_POLICY</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-o-o_-b-i-g.html">TOO_BIG</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-n-o_-e-x-t-e-n-s-i-o-n.html">NO_EXTENSION</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-n-e-x-p-e-c-t-e-d_-c-o-n-d-i-t-i-o-n.html">UNEXPECTED_CONDITION</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-e-r-v-i-c-e_-r-e-s-t-a-r-t.html">SERVICE_RESTART</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-t-r-y_-a-g-a-i-n_-l-a-t-e-r.html">TRY_AGAIN_LATER</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="by-code.html">byCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.CloseReason.Codes.Companion$byCode(kotlin.Short)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Codes</span></a><span class="symbol">?</span></code></div>

Get enum value by close reason code


</td>
</tr>
</tbody>
</table>
