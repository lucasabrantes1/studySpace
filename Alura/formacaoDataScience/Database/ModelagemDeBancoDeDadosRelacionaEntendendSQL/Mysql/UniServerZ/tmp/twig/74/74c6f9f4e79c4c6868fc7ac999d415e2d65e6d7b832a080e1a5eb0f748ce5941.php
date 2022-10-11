<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* server/privileges/subnav.twig */
class __TwigTemplate_f28a559aed0b3a86e21361c42dffc5803e6b2dd66bb7fe4050f79d95e21b4c7c extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"row\">
  <ul class=\"nav nav-pills m-2\">
    <li class=\"nav-item\">
      <a class=\"nav-link";
        // line 4
        echo (((($context["active"] ?? null) == "privileges")) ? (" active") : (""));
        echo "\" href=\"";
        echo PhpMyAdmin\Url::getFromRoute("/server/privileges", ["viewing_mode" => "server"]);
        echo "\">
        ";
        // line 5
        echo _gettext("User accounts overview");
        // line 6
        echo "      </a>
    </li>
    ";
        // line 8
        if (($context["is_super_user"] ?? null)) {
            // line 9
            echo "      <li class=\"nav-item\">
        <a class=\"nav-link";
            // line 10
            echo (((($context["active"] ?? null) == "user-groups")) ? (" active") : (""));
            echo "\" href=\"";
            echo PhpMyAdmin\Url::getFromRoute("/server/user-groups");
            echo "\">
          ";
            // line 11
            echo _gettext("User groups");
            // line 12
            echo "        </a>
      </li>
    ";
        }
        // line 15
        echo "  </ul>
</div>
";
    }

    public function getTemplateName()
    {
        return "server/privileges/subnav.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 15,  67 => 12,  65 => 11,  59 => 10,  56 => 9,  54 => 8,  50 => 6,  48 => 5,  42 => 4,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "server/privileges/subnav.twig", "D:\\UniformServer\\Production\\14_0_3_ZeroXIV\\UniServerZ\\home\\us_opt1\\templates\\server\\privileges\\subnav.twig");
    }
}
