---
title: UpgradeRequest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.servlet</a> / <a href="./index.html">UpgradeRequest</a></div>

# UpgradeRequest

<div class="signature"><code><span class="keyword">class </span><span class="identifier">UpgradeRequest</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">UpgradeRequest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.UpgradeRequest$<init>(javax.servlet.http.HttpServletResponse, io.ktor.http.content.OutgoingContent.ProtocolUpgrade, , , kotlin.Boolean)/response">response</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpServletResponse</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.UpgradeRequest$<init>(javax.servlet.http.HttpServletResponse, io.ktor.http.content.OutgoingContent.ProtocolUpgrade, , , kotlin.Boolean)/upgradeMessage">upgradeMessage</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-protocol-upgrade/index.html"><span class="identifier">ProtocolUpgrade</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.UpgradeRequest$<init>(javax.servlet.http.HttpServletResponse, io.ktor.http.content.OutgoingContent.ProtocolUpgrade, , , kotlin.Boolean)/engineContext">engineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.UpgradeRequest$<init>(javax.servlet.http.HttpServletResponse, io.ktor.http.content.OutgoingContent.ProtocolUpgrade, , , kotlin.Boolean)/userContext">userContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.UpgradeRequest$<init>(javax.servlet.http.HttpServletResponse, io.ktor.http.content.OutgoingContent.ProtocolUpgrade, , , kotlin.Boolean)/disableAsyncInput">disableAsyncInput</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="disable-async-input.html">disableAsyncInput</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">disableAsyncInput</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="engine-context.html">engineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">engineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">response</span><span class="symbol">: </span><span class="identifier">HttpServletResponse</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="upgrade-message.html">upgradeMessage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">upgradeMessage</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-outgoing-content/-protocol-upgrade/index.html"><span class="identifier">ProtocolUpgrade</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="user-context.html">userContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">userContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>
