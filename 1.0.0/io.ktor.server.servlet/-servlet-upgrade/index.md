---
title: ServletUpgrade - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.servlet</a> / <a href="./index.html">ServletUpgrade</a></div>

# ServletUpgrade

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ServletUpgrade</span></code></div>

Servlet upgrade processing

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="perform-upgrade.html">performUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">performUpgrade</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/upgrade">upgrade</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-protocol-upgrade/index.html"><span class="identifier">ProtocolUpgrade</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/servletRequest">servletRequest</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpServletRequest</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/servletResponse">servletResponse</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpServletResponse</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/engineContext">engineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletUpgrade$performUpgrade(io.ktor.http.content.OutgoingContent.ProtocolUpgrade, javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, , )/userContext">userContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Perform HTTP upgrade using engine's native API


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-default-servlet-upgrade/index.html">DefaultServletUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultServletUpgrade</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ServletUpgrade</span></a></code></div>

The default servlet upgrade implementation using Servlet API.
Please note that some servlet containers may not support it or it may be broken.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.jetty.internal/-jetty-upgrade-impl/index.html">JettyUpgradeImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">JettyUpgradeImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ServletUpgrade</span></a></code></div>

</td>
</tr>
</tbody>
</table>
